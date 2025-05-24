import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';


// POST /api/whatsapp-api/transaction
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, packageId, duration } = body;
    if (!userId || !packageId || !['month', 'year'].includes(duration)) {
      return NextResponse.json({ success: false, error: 'Invalid input' }, { status: 400 });
    }

    // Cek paket
    const pkg = await prisma.whatsappApiPackage.findUnique({ where: { id: packageId } });
    if (!pkg) {
      return NextResponse.json({ success: false, error: 'Package not found' }, { status: 404 });
    }

    const price = duration === 'year' ? pkg.priceYear : pkg.priceMonth;

    // Buat transaksi
    const trx = await prisma.whatsappApiTransaction.create({
      data: {
        userId,
        packageId,
        duration,
        price,
        status: 'pending',
      },
    });

    return NextResponse.json({ success: true, data: trx });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}

// GET /api/whatsapp-api/transaction?userId=... (optional for admin)
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url!);
  const userId = searchParams.get('userId');
  
  try {
    const whereClause = userId ? { userId } : {};
    const transactions = await prisma.whatsappApiTransaction.findMany({
      where: whereClause,
      include: { 
        package: true,
        user: { select: { id: true, name: true, email: true } }
      },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: transactions });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}
