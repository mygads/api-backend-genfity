import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withCORS, corsOptionsResponse } from "@/lib/cors";
import { getUserAuth } from "@/lib/auth-helpers";

// GET /api/customer/whatsapp/transactions - Get user's WhatsApp transactions
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
    const status = searchParams.get('status');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10;
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0;

    const whereClause: any = { userId: userAuth.id };
    if (status) whereClause.status = status;

    const [transactions, total] = await Promise.all([
      prisma.whatsappApiTransaction.findMany({
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
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.whatsappApiTransaction.count({ where: whereClause }),
    ]);

    // Add additional info for each transaction
    const transactionsWithInfo = transactions.map(trx => ({
      ...trx,
      durationText: trx.duration === 'year' ? '1 Year' : '1 Month',
      statusText: trx.status === 'paid' ? 'Paid' : trx.status === 'pending' ? 'Pending Payment' : 'Failed',
      canRetryPayment: trx.status === 'pending' || trx.status === 'failed',
    }));

    return withCORS(NextResponse.json({
      success: true,
      data: transactionsWithInfo,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    }));
  } catch (error) {
    console.error("[CUSTOMER_WHATSAPP_TRANSACTIONS_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch WhatsApp transactions" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
