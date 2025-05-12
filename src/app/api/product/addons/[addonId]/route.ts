import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import fs from 'fs/promises';
import path from 'path';

// Base schema for addon, all fields optional for PUT
const addonSchemaBase = z.object({
  name_en: z.string().min(1, "Name (EN) is required").optional(),
  name_id: z.string().min(1, "Name (ID) is required").optional(),
  description_en: z.string().min(1, "Description (EN) is required").optional(),
  description_id: z.string().min(1, "Description (ID) is required").optional(),
  price_idr: z.number().positive("Price (IDR) must be a positive number").optional(),
  price_usd: z.number().positive("Price (USD) must be a positive number").optional(),
  image: z.string().url("Image must be a valid URL").optional(),
  categoryId: z.string().cuid("Invalid Category ID").optional(),
  duration: z.number().int().positive().optional(),
  durationUnit: z.literal('day').optional(),
});

export async function GET(
  request: Request,
  { params }: { params: { addonId: string } }
) {
  try {
    const { addonId } = params;
    if (!addonId) {
      return new NextResponse(JSON.stringify({ message: "Addon ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const addon = await prisma.addon.findUnique({
      where: { id: addonId },
      include: {
        category: true,
      },
    });

    if (!addon) {
      return new NextResponse(JSON.stringify({ message: "Addon not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return NextResponse.json(addon);
  } catch (error) {
    console.error("[ADDON_GET_BY_ID]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { addonId: string } }
) {
  try {
    const awaitedParams = await params; // Await params as suggested by the error
    const { addonId } = awaitedParams;
    if (!addonId) {
      return new NextResponse(JSON.stringify({ message: "Addon ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    const validation = addonSchemaBase.safeParse(body);

    if (!validation.success) {
      return new NextResponse(JSON.stringify(validation.error.errors), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }    // Ambil semua field dari validation.data
    const { name_en, name_id, description_en, description_id, price_idr, price_usd, image, categoryId, duration, durationUnit } = validation.data as any;

    if (Object.keys(validation.data).length === 0) {
        return new NextResponse(JSON.stringify({ message: "No fields to update" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const currentAddon = await prisma.addon.findUnique({
        where: { id: addonId },
    });

    if (!currentAddon) {
        return new NextResponse(JSON.stringify({ message: "Addon not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    const targetCategoryId = categoryId || currentAddon.categoryId;

    // Cek duplikat nama (multi-bahasa)
    if (name_en || name_id) {
      const existingAddonWithName = await prisma.addon.findFirst({
        where: {
          categoryId: targetCategoryId,
          id: { not: addonId },
          OR: [
            name_en ? { name_en } : undefined,
            name_id ? { name_id } : undefined,
          ].filter(Boolean) as any,
        },
      });
      if (existingAddonWithName) {
        return new NextResponse(
          JSON.stringify({ message: "Another addon with this name already exists in this category" }),
          {
            status: 409,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    if (categoryId) {
        const categoryExists = await prisma.category.findUnique({ where: { id: categoryId } });
        if (!categoryExists) {
            return new NextResponse(JSON.stringify({ message: "Target category not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }
    }

    // Hapus file gambar lama jika diganti dengan yang baru dan gambar lama adalah URL ke domain sendiri
    if (image && currentAddon.image && image !== currentAddon.image) {
      try {
        const url = new URL(currentAddon.image);
        if (url.hostname === 'localhost' || url.hostname === process.env.NEXT_PUBLIC_DOMAIN) {
          const imagePath = url.pathname;
          const absolutePath = path.join(process.cwd(), 'public', imagePath);
          await fs.unlink(absolutePath);
        }
      } catch (err) {
        if ((err as any).code !== 'ENOENT') {
          console.error('Gagal menghapus file gambar lama saat edit:', err);
        }
      }
    }    // Update data
    const updateData: any = {};
    if (name_en !== undefined) updateData.name_en = name_en;
    if (name_id !== undefined) updateData.name_id = name_id;
    if (description_en !== undefined) updateData.description_en = description_en;
    if (description_id !== undefined) updateData.description_id = description_id;
    if (price_idr !== undefined) updateData.price_idr = price_idr;
    if (price_usd !== undefined) updateData.price_usd = price_usd;
    if (image !== undefined) updateData.image = image;
    if (categoryId !== undefined) updateData.categoryId = categoryId;
    if (duration !== undefined) updateData.duration = duration;
    if (durationUnit !== undefined) updateData.durationUnit = durationUnit;

    const updatedAddon = await prisma.addon.update({
      where: { id: addonId },
      data: updateData,
    });

    return NextResponse.json(updatedAddon);
  } catch (error) {
    console.error("[ADDON_PUT]", error);
    if ((error as any).code === 'P2025') { 
        return new NextResponse(JSON.stringify({ message: "Addon not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(
  request: Request,
  context: { params: { addonId: string } }
) {
  try {
    const { addonId } = await context.params;
    if (!addonId) {
      return new NextResponse(JSON.stringify({ message: "Addon ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Cari data addon sebelum dihapus
    const addon = await prisma.addon.findUnique({ where: { id: addonId } });
    if (!addon) {
      return new NextResponse(JSON.stringify({ message: "Addon not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Hapus file gambar jika ada dan path-nya lokal (bukan http/https/data:image)
    if (addon.image && !addon.image.startsWith('http') && !addon.image.startsWith('data:image')) {
      // Pastikan path sudah benar (misal: /product-images/namafile.png atau hanya namafile.png)
      let imagePath = addon.image;
      if (!imagePath.startsWith('/')) {
        imagePath = `/product-images/${imagePath}`;
      }
      // Path absolut ke file di public
      const absolutePath = path.join(process.cwd(), 'public', imagePath);
      try {
        await fs.unlink(absolutePath);
      } catch (err) {
        // Jika file tidak ada, abaikan error
        if ((err as any).code !== 'ENOENT') {
          console.error('Gagal menghapus file gambar:', err);
        }
      }
    }

    // Hapus file gambar jika ada dan path-nya http(s) ke domain sendiri
    if (addon.image && (addon.image.startsWith('http://') || addon.image.startsWith('https://'))) {
      try {
        const url = new URL(addon.image);
        // Hanya hapus jika domain sama dengan server (localhost/production)
        if (url.hostname === 'localhost' || url.hostname === process.env.NEXT_PUBLIC_DOMAIN) {
          // Ambil path setelah domain, misal: /product-images/namafile.png
          const imagePath = url.pathname;
          const absolutePath = path.join(process.cwd(), 'public', imagePath);
          await fs.unlink(absolutePath);
        }
      } catch (err) {
        // Jika file tidak ada, abaikan error
        if ((err as any).code !== 'ENOENT') {
          console.error('Gagal menghapus file gambar:', err);
        }
      }
    }

    await prisma.addon.delete({
      where: { id: addonId },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[ADDON_DELETE]", error);
    if ((error as any).code === 'P2025') { 
        return new NextResponse(JSON.stringify({ message: "Addon not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
