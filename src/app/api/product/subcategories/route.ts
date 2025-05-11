import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const subcategorySchema = z.object({
  name_en: z.string().min(1, "English name is required"),
  name_id: z.string().min(1, "Indonesian name is required"),
  categoryId: z.string().cuid("Invalid Category ID"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = subcategorySchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse(JSON.stringify(validation.error.errors), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name_en, name_id, categoryId } = validation.data;

    // Check if category exists
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category) {
      return new NextResponse(JSON.stringify({ message: "Category not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if subcategory with the same name already exists in this category
    const existingSubcategory = await prisma.subcategory.findFirst({
      where: {
        OR: [
          { name_en, categoryId },
          { name_id, categoryId },
        ],
      },
    });
    if (existingSubcategory) {
      return new NextResponse(
        JSON.stringify({ message: "Subcategory with this name already exists in this category" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const subcategory = await prisma.subcategory.create({
      data: {
        name_en,
        name_id,
        categoryId,
      },
    });
    return NextResponse.json(subcategory, { status: 201 });
  } catch (error) {
    console.error("[SUBCATEGORIES_POST]", error);
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

    const subcategories = await prisma.subcategory.findMany({
      where: categoryId ? { categoryId } : {},
      include: {
        category: true, // Include parent category information
        packages: true,
      },
    });
    return NextResponse.json(subcategories);
  } catch (error) {
    console.error("[SUBCATEGORIES_GET]", error);
    return new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
