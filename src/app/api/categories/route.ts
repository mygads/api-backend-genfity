import { NextResponse } from "next/server";
import { z } from "zod";
import { withCORS, corsOptionsResponse } from "../../../lib/cors";
import { prisma } from "../../../lib/prisma";

const categorySchema = z.object({
  name_en: z.string().min(1, "English name is required"),
  name_id: z.string().min(1, "Indonesian name is required"), 
  icon: z.string().url("Icon must be a valid URL"),
});

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = categorySchema.safeParse(body);

    if (!validation.success) {
      return withCORS(new NextResponse(JSON.stringify(validation.error.errors), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }));
    }    const { name_en, name_id, icon } = validation.data;

    const existingCategory = await prisma.category.findFirst({
      where: { name_en: name_en },
    });

    if (existingCategory) {
      return withCORS(new NextResponse(JSON.stringify({ message: "Category with this name already exists" }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      }));
    }

    const category = await prisma.category.create({
      data: {
        name_en: name_en,
        name_id: name_id,
        icon,
      },
    });
    return withCORS(NextResponse.json(category, { status: 201 }));
  } catch (error) {
    console.error("[CATEGORIES_POST]", error);
    return withCORS(new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }));
  }
}

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subcategories: true,
        addons: true,
        packages: true,
      },
    });
    return withCORS(NextResponse.json(categories));
  } catch (error) {
    console.error("[CATEGORIES_GET]", error);
    return withCORS(new NextResponse(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }));
  }
}
