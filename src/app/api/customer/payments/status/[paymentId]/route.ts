import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  try {
    const { paymentId } = await params;
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return withCORS(NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      ));
    }

    const payment = await prisma.payment.findFirst({
      where: {
        id: paymentId,
        transaction: {
          userId: session.user.id, // Ensure user can only access their own payments
        },
      },
      include: {
        transaction: {
          select: {
            id: true,
            status: true,
            transactionDate: true,
            startDate: true,
            endDate: true,
            package: {
              select: {
                id: true,
                name_en: true,
                name_id: true,
              },
            },
            addon: {
              select: {
                id: true,
                name_en: true,
                name_id: true,
              },
            },
          },
        },
      },
    });

    if (!payment) {
      return withCORS(NextResponse.json(
        { success: false, error: "Payment not found" },
        { status: 404 }
      ));
    }

    // Simulate payment status check for different gateways
    let statusUpdate: any = {};
    
    if (payment.method === 'midtrans') {
      // Simulate Midtrans status check
      statusUpdate = {
        gateway_status: 'pending',
        fraud_status: 'accept',
        transaction_time: new Date().toISOString(),
      };
    } else if (payment.method === 'xendit') {
      // Simulate Xendit status check
      statusUpdate = {
        gateway_status: 'pending',
        external_id: `xen_${Date.now()}`,
        updated: new Date().toISOString(),
      };
    } else if (payment.method === 'manual') {
      // Manual payment status
      statusUpdate = {
        verification_status: 'waiting_confirmation',
        last_checked: new Date().toISOString(),
      };
    }

    return withCORS(NextResponse.json({
      success: true,
      data: {
        ...payment,
        gateway_info: statusUpdate,
      },
    }));
  } catch (error) {
    console.error("[CUSTOMER_PAYMENT_STATUS_GET]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to fetch payment status" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
