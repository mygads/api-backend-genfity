import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    const subcategoryId = searchParams.get('subcategoryId');
    const popular = searchParams.get('popular');

    // Build where clause based on query parameters
    const whereClause: any = {};
    if (categoryId) whereClause.categoryId = categoryId;
    if (subcategoryId) whereClause.subcategoryId = subcategoryId;
    if (popular === 'true') whereClause.popular = true;

    const packages = await prisma.package.findMany({
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
        subcategory: {
          select: {
            id: true,
            name_en: true,
            name_id: true,
          },
        },
        features: {
          select: {
            id: true,
            name_en: true,
            name_id: true,
            included: true,
          },
        },
      },
      orderBy: [
        { popular: 'desc' },
        { price_idr: 'asc' },
      ],
    });

    return withCORS(NextResponse.json({
      success: true,
      data: packages,
      total: packages.length,
    }));
  } catch (error) {
    console.error("[CUSTOMER_PACKAGES_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch packages" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
