import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { addMonths, addYears } from 'date-fns';

// POST /api/whatsapp/management/service/activate
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, transactionId } = body;
    if (!transactionId) {
      return NextResponse.json({ success: false, error: 'transactionId is required' }, { status: 400 });
    }

    // Ambil transaksi dan paket
    const trx = await prisma.whatsappApiTransaction.findUnique({
      where: { id: transactionId },
      include: { package: true },
    });
    if (!trx) {
      return NextResponse.json({ success: false, error: 'Transaction not found' }, { status: 404 });
    }
    
    // If userId is provided, validate it matches the transaction userId
    if (userId && trx.userId !== userId) {
      return NextResponse.json({ success: false, error: 'Transaction not found' }, { status: 404 });
    }
      if (trx.status !== 'paid') {
      return NextResponse.json({ success: false, error: 'Transaction not paid' }, { status: 400 });
    }

    // Check if this transaction has already been used to create a service
    const existingServiceFromTransaction = await prisma.whatsappApiService.findFirst({
      where: {
        userId: trx.userId,
        packageId: trx.packageId,
        createdAt: {
          gte: trx.createdAt, // Service created after transaction
        },
      },
    });

    if (existingServiceFromTransaction) {
      return NextResponse.json({ 
        success: false, 
        error: 'This transaction has already been used to activate a service' 
      }, { status: 400 });
    }// Hitung expiredAt
    const now = new Date();
    let expiredAt = now;
    if (trx.duration === 'year') {
      expiredAt = addYears(now, 1);
    } else {
      expiredAt = addMonths(now, 1);
    }

    // Check if user already has an active service for this package
    const existingService = await prisma.whatsappApiService.findFirst({
      where: {
        userId: trx.userId,
        packageId: trx.packageId,
        expiredAt: { gt: now },
      },
      orderBy: { expiredAt: 'desc' },
    });

    let service;
    if (existingService) {
      // Extend existing service
      const newExpiredAt = trx.duration === 'year' 
        ? addYears(existingService.expiredAt, 1)
        : addMonths(existingService.expiredAt, 1);
      
      service = await prisma.whatsappApiService.update({
        where: { id: existingService.id },
        data: { expiredAt: newExpiredAt },
      });
    } else {
      // Create new service
      service = await prisma.whatsappApiService.create({
        data: {
          userId: trx.userId,
          packageId: trx.packageId,
          expiredAt,
        },
      });
    }

    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}
