import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const packageId = searchParams.get('packageId');
    const addonId = searchParams.get('addonId');

    if (!packageId && !addonId) {
      return withCORS(NextResponse.json(
        { success: false, error: "Either packageId or addonId is required" },
        { status: 400 }
      ));
    }

    let item = null;

    if (packageId) {
      item = await prisma.package.findUnique({
        where: { id: packageId },
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
      });
    } else if (addonId) {
      item = await prisma.addon.findUnique({
        where: { id: addonId },
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
      });
    }

    if (!item) {
      return withCORS(NextResponse.json(
        { success: false, error: "Item not found" },
        { status: 404 }
      ));
    }

    return withCORS(NextResponse.json({
      success: true,
      data: item,
    }));
  } catch (error) {
    console.error("[CUSTOMER_ITEM_DETAILS_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch item details" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
