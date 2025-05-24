import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  icon: z.string().min(1, "Icon is required"),
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
    }

    const { name, icon } = validation.data;

    const existingCategory = await prisma.category.findFirst({
      where: { name_en: name },
    });

    if (existingCategory) {
      return withCORS(new NextResponse(JSON.stringify({ message: "Category with this name already exists" }), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      }));
    }

    const category = await prisma.category.create({
      data: {
        name_en: name,
        name_id: name,
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
