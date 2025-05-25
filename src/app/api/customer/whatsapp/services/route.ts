import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withCORS, corsOptionsResponse } from "@/lib/cors";
import { getUserAuth } from "@/lib/auth-helpers";
import { z } from "zod";

const createSubscriptionSchema = z.object({
  packageId: z.string().cuid(),
  duration: z.enum(['month', 'year']),
});

// GET /api/customer/whatsapp/services - Get user's WhatsApp services
export async function GET(request: Request) {
  try {
    const userAuth = await getUserAuth(request);
    if (!userAuth?.id) {
      return withCORS(NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      ));
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status'); // 'active', 'expired', 'all'

    const whereClause: any = { userId: userAuth.id };
    
    if (status === 'active') {
      whereClause.expiredAt = { gt: new Date() };
    } else if (status === 'expired') {
      whereClause.expiredAt = { lte: new Date() };
    }

    const services = await prisma.whatsappApiService.findMany({
      where: whereClause,
      include: {
        package: {
          select: {
            id: true,
            name: true,
            description: true,
            maxSession: true,
          },
        },
      },
      orderBy: { expiredAt: 'desc' },
    });

    // Add status and days remaining
    const servicesWithStatus = services.map(service => {
      const now = new Date();
      const daysRemaining = Math.ceil((service.expiredAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      
      return {
        ...service,
        status: service.expiredAt > now ? 'active' : 'expired',
        daysRemaining: daysRemaining > 0 ? daysRemaining : 0,
        isExpiringSoon: daysRemaining > 0 && daysRemaining <= 7,
      };
    });

    return withCORS(NextResponse.json({
      success: true,
      data: servicesWithStatus,
      total: servicesWithStatus.length,
    }));
  } catch (error) {
    console.error("[CUSTOMER_WHATSAPP_SERVICES_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch WhatsApp services" },
      { status: 500 }
    ));
  }
}

// POST /api/customer/whatsapp/services - Subscribe to WhatsApp service
export async function POST(request: Request) {
  try {
    const userAuth = await getUserAuth(request);
    if (!userAuth?.id) {
      return withCORS(NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      ));
    }

    const body = await request.json();
    const validation = createSubscriptionSchema.safeParse(body);

    if (!validation.success) {
      return withCORS(NextResponse.json(
        { success: false, error: validation.error.errors },
        { status: 400 }
      ));
    }

    const { packageId, duration } = validation.data;

    // Verify package exists
    const pkg = await prisma.whatsappApiPackage.findUnique({
      where: { id: packageId },
    });

    if (!pkg) {
      return withCORS(NextResponse.json(
        { success: false, error: "Package not found" },
        { status: 404 }
      ));
    }

    const price = duration === 'year' ? pkg.priceYear : pkg.priceMonth;    // Create transaction first
    const transaction = await prisma.whatsappApiTransaction.create({
      data: {
        userId: userAuth.id,
        packageId,
        duration,
        price,
        status: 'pending',
      },
      include: {
        package: {
          select: {
            id: true,
            name: true,
            description: true,
            maxSession: true,
          },
        },
      },
    });

    return withCORS(NextResponse.json({
      success: true,
      data: transaction,
      message: "Subscription request created. Complete payment to activate service.",
    }));
  } catch (error) {
    console.error("[CUSTOMER_WHATSAPP_SERVICES_POST]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to create subscription" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
