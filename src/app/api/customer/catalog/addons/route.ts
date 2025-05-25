import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');

    // Build where clause based on query parameters
    const whereClause: any = {};
    if (categoryId) whereClause.categoryId = categoryId;

    const addons = await prisma.addon.findMany({
      where: whereClause,
      include: {
        category: {
          select: {
            id: true,
            name_en: true,
            name_id: true,
            icon: true,
          },
        },
      },
      orderBy: {
        price_idr: 'asc',
      },
    });

    return withCORS(NextResponse.json({
      success: true,
      data: addons,
      total: addons.length,
    }));
  } catch (error) {
    console.error("[CUSTOMER_ADDONS_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch addons" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
