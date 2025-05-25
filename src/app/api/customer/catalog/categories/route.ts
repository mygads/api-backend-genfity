import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

export async function GET(request: Request) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subcategories: {
          select: {
            id: true,
            name_en: true,
            name_id: true,
          },
          orderBy: {
            name_en: 'asc',
          },
        },
        _count: {
          select: {
            packages: true,
            addons: true,
          },
        },
      },
      orderBy: {
        name_en: 'asc',
      },
    });

    return withCORS(NextResponse.json({
      success: true,
      data: categories,
      total: categories.length,
    }));
  } catch (error) {
    console.error("[CUSTOMER_CATEGORIES_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch categories" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
