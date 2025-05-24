import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

// PATCH /api/whatsapp-api/packages/[id]
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();
  const { name, priceMonth, priceYear, maxSession } = body;
  if (!name || !priceMonth || !priceYear || !maxSession) {
    return NextResponse.json({ success: false, error: 'All fields are required' }, { status: 400 });
  }
  try {
    const updated = await prisma.whatsappApiPackage.update({
      where: { id },
      data: {
        name,
        priceMonth: Number(priceMonth),
        priceYear: Number(priceYear),
        maxSession: Number(maxSession),
      },
    });
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}

// DELETE /api/whatsapp-api/packages/[id]
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    await prisma.whatsappApiPackage.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}
