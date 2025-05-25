import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

// GET /api/customer/whatsapp/packages - Get WhatsApp API packages for customers
export async function GET(request: Request) {
  try {
    const packages = await prisma.whatsappApiPackage.findMany({
      orderBy: { priceMonth: 'asc' },
      select: {
        id: true,
        name: true,
        description: true,
        priceMonth: true,
        priceYear: true,
        maxSession: true,
        createdAt: true,
      },
    });

    // Add pricing comparison and recommendations
    const packagesWithRecommendations = packages.map(pkg => ({
      ...pkg,
      yearlyDiscount: pkg.priceYear < (pkg.priceMonth * 12) 
        ? Math.round(((pkg.priceMonth * 12 - pkg.priceYear) / (pkg.priceMonth * 12)) * 100)
        : 0,
      recommended: pkg.maxSession >= 5 && pkg.maxSession <= 20, // Example logic
      features: [
        `Up to ${pkg.maxSession} WhatsApp sessions`,
        'API webhook support',
        'Message automation',
        'Media file sending',
        '24/7 technical support',
      ],
    }));

    return withCORS(NextResponse.json({
      success: true,
      data: packagesWithRecommendations,
      total: packagesWithRecommendations.length,
    }));
  } catch (error) {
    console.error("[CUSTOMER_WHATSAPP_PACKAGES_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch WhatsApp packages" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
