import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/whatsapp-api/packages
export async function GET() {
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
    return NextResponse.json({ success: true, data: packages });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}

// POST /api/whatsapp-api/packages
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, priceMonth, priceYear, maxSession } = body;
    if (!name || !priceMonth || !priceYear || !maxSession) {
      return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
    }
    const created = await prisma.whatsappApiPackage.create({
      data: {
        name,
        priceMonth: Number(priceMonth),
        priceYear: Number(priceYear),
        maxSession: Number(maxSession),
      },
    });
    return NextResponse.json({ success: true, data: created });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}
