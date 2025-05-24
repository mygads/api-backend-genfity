import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

const addonSchema = z.object({
  name_en: z.string().min(1, "English name is required"),
  name_id: z.string().min(1, "Indonesian name is required"),
  description_en: z.string().optional(),
  description_id: z.string().optional(),
  price_idr: z.number().positive("Price IDR must be a positive number"),
  price_usd: z.number().positive("Price USD must be a positive number"),
  image: z.string().url("Image must be a valid URL"),
  categoryId: z.string().cuid("Invalid Category ID"),
  duration: z.number().int().positive().optional().default(1),
  durationUnit: z.literal('day').default('day'),
});

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = addonSchema.safeParse(body);

    if (!validation.success) {
      return withCORS(new NextResponse(JSON.stringify({ message: "Validation failed", errors: validation.error.flatten() }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }));
    }

    const { name_en, name_id, description_en, description_id, price_idr, price_usd, image, categoryId, duration, durationUnit } = validation.data;

    const category = await prisma.category.findUnique({ where: { id: categoryId } });
    if (!category) {
      return withCORS(new NextResponse(JSON.stringify({ message: "Category not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }));
    }

    const existingAddon = await prisma.addon.findFirst({
      where: {
        OR: [
          { name_en, categoryId },
          { name_id, categoryId },
        ],
      },
    });
    if (existingAddon) {
      return withCORS(new NextResponse(
        JSON.stringify({ message: "Addon with this name already exists in this category" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      ));
    }

    const addon = await prisma.addon.create({
      data: {
        name_en,
        name_id,
        description_en: description_en ?? "",
        description_id: description_id ?? "",
        price_idr,
        price_usd,
        image: image,
        categoryId,
        duration: duration ?? 1,
        durationUnit: 'day',
      },
    });
    return withCORS(NextResponse.json(addon, { status: 201 }));
  } catch (error) {
    console.error("[ADDONS_POST]", error);
    return withCORS(new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }));
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    const addons = await prisma.addon.findMany({
      where: categoryId ? { categoryId } : {},
      include: {
        category: true,
      },
    });
    // Pastikan duration selalu ada (default 1 jika null/undefined)
    const addonsWithDuration = addons.map(a => ({
      ...a,
      duration: a.duration ?? 1,
      durationUnit: 'day',
    }));
    return withCORS(NextResponse.json(addonsWithDuration));
  } catch (error) {
    console.error("[ADDONS_GET]", error);
    return withCORS(new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }));
  }
}
