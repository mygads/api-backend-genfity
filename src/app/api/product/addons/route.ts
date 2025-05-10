import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const addonSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(), // Made description optional
  price: z.number().positive("Price must be a positive number"), // Ensure price is positive, not just non-zero
  image: z.string().url("Image must be a valid URL").optional().nullable(), // Image is optional, can be null
  categoryId: z.string().cuid("Invalid Category ID"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = addonSchema.safeParse(body);

    if (!validation.success) {
      // Return detailed validation errors
      return new NextResponse(JSON.stringify({ message: "Validation failed", errors: validation.error.flatten() }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Use validated data, which might have undefined for optional fields
    const { name, description, price, image, categoryId } = validation.data;

    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      return new NextResponse(JSON.stringify({ message: "Category not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const existingAddon = await prisma.addon.findFirst({
      where: {
        name,
        categoryId,
      },
    });

    if (existingAddon) {
      return new NextResponse(
        JSON.stringify({ message: "Addon with this name already exists in this category" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const addon = await prisma.addon.create({
      data: {
        name,
        description: description ?? "", // Pass empty string to Prisma if description is undefined
        price, // Zod ensures price is a number
        image: image ?? "",           // Pass empty string to Prisma if image is undefined or null
        categoryId,
      },
    });
    return NextResponse.json(addon, { status: 201 });
  } catch (error) {
    console.error("[ADDONS_POST]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get("categoryId");

    const addons = await prisma.addon.findMany({
      where: categoryId ? { categoryId } : {},
      include: {
        category: true, // Include parent category information
      },
    });
    return NextResponse.json(addons);
  } catch (error) {
    console.error("[ADDONS_GET]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
