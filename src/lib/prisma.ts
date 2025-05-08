import { PrismaClient } from '../generated/prisma';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // log: ['query'], // Anda bisa uncomment ini untuk debugging query Prisma
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
