import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { withCORS, corsOptionsResponse } from "@/lib/cors";
import { z } from "zod";

const processPaymentSchema = z.object({
  transactionId: z.string().cuid(),
  method: z.enum(['midtrans', 'xendit', 'manual']),
  amount: z.number().positive(),
});

// POST /api/customer/payments/process - Process payment for transaction
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return withCORS(NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      ));
    }

    const body = await request.json();
    const validation = processPaymentSchema.safeParse(body);

    if (!validation.success) {
      return withCORS(NextResponse.json(
        { success: false, error: validation.error.errors },
        { status: 400 }
      ));
    }

    const { transactionId, method, amount } = validation.data;

    // Verify transaction belongs to user and is in pending status
    const transaction = await prisma.transaction.findFirst({
      where: {
        id: transactionId,
        userId: session.user.id,
        status: 'pending',
      },
      include: {
        payment: true,
      },
    });

    if (!transaction) {
      return withCORS(NextResponse.json(
        { success: false, error: "Transaction not found or not eligible for payment" },
        { status: 404 }
      ));
    }

    // Simulate payment processing based on method
    let paymentStatus = 'pending';
    let paymentResponse: any = {};

    switch (method) {
      case 'midtrans':
        // Simulate Midtrans payment gateway
        paymentResponse = {
          payment_url: `https://app.sandbox.midtrans.com/snap/v1/transactions/${transactionId}`,
          token: `mt_${Date.now()}`,
          redirect_url: `https://app.sandbox.midtrans.com/snap/v4/redirection/${transactionId}`,
        };
        paymentStatus = 'pending';
        break;
      
      case 'xendit':
        // Simulate Xendit payment gateway
        paymentResponse = {
          payment_url: `https://checkout.xendit.co/web/${transactionId}`,
          external_id: `xen_${Date.now()}`,
          invoice_id: `inv_${transactionId}`,
        };
        paymentStatus = 'pending';
        break;
      
      case 'manual':
        // Manual payment (bank transfer, etc.)
        paymentResponse = {
          bank_account: {
            bank_name: "Bank Central Asia",
            account_number: "1234567890",
            account_name: "PT Genfity Indonesia",
          },
          payment_code: `PAY_${transactionId.slice(-8).toUpperCase()}`,
          instructions: "Please transfer the exact amount and include the payment code in the description",
        };
        paymentStatus = 'pending';
        break;
    }

    // Update payment record
    const updatedPayment = await prisma.payment.update({
      where: { id: transaction.payment!.id },
      data: {
        method,
        status: paymentStatus,
        amount,
      },
    });

    return withCORS(NextResponse.json({
      success: true,
      data: {
        transaction_id: transactionId,
        payment_id: updatedPayment.id,
        method,
        amount,
        status: paymentStatus,
        ...paymentResponse,
      },
      message: "Payment processing initiated",
    }));
  } catch (error) {
    console.error("[CUSTOMER_PAYMENTS_PROCESS]", error);
    return withCORS(NextResponse.json(
      { success: false, error: "Failed to process payment" },
      { status: 500 }
    ));
  }
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
