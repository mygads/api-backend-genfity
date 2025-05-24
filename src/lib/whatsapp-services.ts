const WA_API = process.env.WHATSAPP_SERVER_API;
const API_KEY = process.env.WHATSAPP_API_KEY;

if (!WA_API) {
  throw new Error('WHATSAPP_SERVER_API is not defined.');
}
if (!API_KEY) {
  throw new Error('WHATSAPP_API_KEY is not defined.');
}

import { prisma } from '@/lib/prisma';

export async function waFetch(path: string, method: string = 'GET', body?: any) {
    const options: RequestInit = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${API_KEY}`,
        },
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    const res = await fetch(`${WA_API}${path}`, options);
    return res.json();
}

// Validasi apakah user boleh membuat session baru
export async function canCreateWhatsappSession(userId: string): Promise<{ allowed: boolean; maxSession: number; currentSession: number; isAdmin: boolean; }> {
  // Cek role user
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return { allowed: false, maxSession: 0, currentSession: 0, isAdmin: false };
  }
  if (user.role === 'admin') {
    // Admin boleh membuat session tanpa batas
    return { allowed: true, maxSession: Number.MAX_SAFE_INTEGER, currentSession: 0, isAdmin: true };
  }
  // Ambil paket aktif user
  const now = new Date();
  const service = await prisma.whatsappApiService.findFirst({
    where: { userId, expiredAt: { gt: now } },
    include: { package: true },
    orderBy: { expiredAt: 'desc' },
  });
  if (!service || !service.package) {
    return { allowed: false, maxSession: 0, currentSession: 0, isAdmin: false };
  }
  // Hitung jumlah session WhatsApp aktif milik user
  const currentSession = await prisma.whatsAppSession.count({
    where: { userId },
  });
  return {
    allowed: currentSession < service.package.maxSession,
    maxSession: service.package.maxSession,
    currentSession,
    isAdmin: false,
  };
}