import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import fs from 'fs/promises';
import path from 'path';

// Base schema for addon, all fields optional for PUT
const addonSchemaBase = z.object({
  name: z.string().min(1, "Name is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
  price: z.number().positive("Price must be a positive number").optional(),
  image: z.string().url("Image must be a valid URL").optional(),
  categoryId: z.string().cuid("Invalid Category ID").optional(),
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
    }

    const { name, description, price, image, categoryId } = validation.data;

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

    if (name) {
        const existingAddonWithName = await prisma.addon.findFirst({
            where: {
                name,
                categoryId: targetCategoryId,
                id: { not: addonId },
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

    const updatedAddon = await prisma.addon.update({
      where: { id: addonId },
      data: validation.data, // Pass validated data directly
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
