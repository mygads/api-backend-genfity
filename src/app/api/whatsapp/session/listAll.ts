import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { waFetch } from '@/lib/whatsapp-services';

// GET /api/whatsapp/session/listAll
export async function GET() {
    try {
        const listRes = await waFetch('/session/listAll');
        
        return NextResponse.json(listRes);
    } catch (e) {
        return NextResponse.json({ error: (e as Error).message }, { status: 500 });
    }
}
