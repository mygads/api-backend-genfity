import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PATCH /api/whatsapp/management/service/[id] (update expiredAt)
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const { expiredAt } = body;
  if (!expiredAt) {
    return NextResponse.json({ success: false, error: 'expiredAt is required' }, { status: 400 });
  }
  try {
    const updated = await prisma.whatsappApiService.update({
      where: { id },
      data: { expiredAt: new Date(expiredAt) },
    });
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });  }
}

// DELETE /api/whatsapp/management/service/[id]
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.whatsappApiService.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() });
  }
}
