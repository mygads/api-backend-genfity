import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { waFetch } from '@/lib/whatsapp-services';
import { withCORS, corsOptionsResponse } from '@/lib/cors';

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function GET() {
    try {
        const listRes = await waFetch('/session/listAll');
        return withCORS(NextResponse.json(listRes));
    } catch (e) {
        return withCORS(NextResponse.json({ error: (e as Error).message }, { status: 500 }));
    }
}
