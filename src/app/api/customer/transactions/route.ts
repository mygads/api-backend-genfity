import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withCORS, corsOptionsResponse } from "@/lib/cors";
import { getUserAuth } from "@/lib/auth-helpers";
import { z } from "zod";

const createTransactionSchema = z.object({
  packageId: z.string().cuid().optional(),
  addonId: z.string().cuid().optional(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  referenceLink: z.string().url().optional(),
}).refine(data => data.packageId || data.addonId, {
  message: "Either packageId or addonId must be provided",
});

export async function OPTIONS() {
  return corsOptionsResponse();
}

// GET /api/customer/transactions - Get user's transactions
export async function GET(request: Request) {
  try {
    const userAuth = await getUserAuth(request);
    if (!userAuth) {
      return withCORS(NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      ));
    }    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 10;
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0;

    const whereClause: any = { userId: userAuth.id };
    if (status) whereClause.status = status;

    const [transactions, total] = await Promise.all([
      prisma.transaction.findMany({
        where: whereClause,
        include: {
          package: {
            select: {
              id: true,
              name_en: true,
              name_id: true,
              price_idr: true,
              price_usd: true,
              image: true,
            },
          },
          addon: {
            select: {
              id: true,
              name_en: true,
              name_id: true,
              price_idr: true,
              price_usd: true,
              image: true,
            },
          },
          payment: {
            select: {
              id: true,
              amount: true,
              method: true,
              status: true,
              paymentDate: true,
            },
          },
        },
        orderBy: { transactionDate: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.transaction.count({ where: whereClause }),
    ]);

    return withCORS(NextResponse.json({
      success: true,
      data: transactions,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    }));
  } catch (error) {
    console.error("[CUSTOMER_TRANSACTIONS_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch transactions" },
      { status: 500 }
    ));
  }
}

// POST /api/customer/transactions - Create new transaction
export async function POST(request: Request) {
  try {
    const userAuth = await getUserAuth(request);
    if (!userAuth) {
      return withCORS(NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      ));
    }

    const body = await request.json();
    const validation = createTransactionSchema.safeParse(body);

    if (!validation.success) {
      return withCORS(NextResponse.json(
        { success: false, error: validation.error.errors },
        { status: 400 }
      ));
    }

    const { packageId, addonId, startDate, endDate, referenceLink } = validation.data;

    // Verify the package or addon exists and get pricing
    let item = null;
    let amount = 0;

    if (packageId) {
      item = await prisma.package.findUnique({
        where: { id: packageId },
        select: { id: true, name_en: true, price_idr: true, price_usd: true },
      });
      if (!item) {
        return withCORS(NextResponse.json(
          { success: false, error: "Package not found" },
          { status: 404 }
        ));
      }
      amount = Number(item.price_idr);
    } else if (addonId) {
      item = await prisma.addon.findUnique({
        where: { id: addonId },
        select: { id: true, name_en: true, price_idr: true, price_usd: true },
      });
      if (!item) {
        return withCORS(NextResponse.json(
          { success: false, error: "Addon not found" },
          { status: 404 }
        ));
      }
      amount = Number(item.price_idr);
    }

    // Create transaction with payment record
    const transaction = await prisma.transaction.create({
      data: {
        userId: userAuth.id,
        packageId,
        addonId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: 'pending',
        referenceLink,
        payment: {
          create: {
            amount,
            method: 'pending', // Will be updated when payment method is chosen
            status: 'pending',
          },
        },
      },
      include: {
        package: {
          select: {
            id: true,
            name_en: true,
            name_id: true,
            price_idr: true,
            price_usd: true,
          },
        },
        addon: {
          select: {
            id: true,
            name_en: true,
            name_id: true,
            price_idr: true,
            price_usd: true,
          },
        },
        payment: true,
      },
    });

    return withCORS(NextResponse.json({
      success: true,
      data: transaction,
      message: "Transaction created successfully",
    }));
  } catch (error) {
    console.error("[CUSTOMER_TRANSACTIONS_POST]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to create transaction" },
      { status: 500 }
    ));
  }
}
