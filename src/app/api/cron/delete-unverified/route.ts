// src/app/api/cron/delete-unverified/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  // Optional: Add a secret key check to protect this endpoint
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

    try {
        const now = new Date();

        // Find users whose OTP has expired and phone is not verified
        // OR users whose email verification token has expired and email is not verified.
        const result = await prisma.user.deleteMany({
            where: {
                OR: [
                    {
                        // Signed up with phone, OTP expired, phone not verified
                        AND: [
                        { phoneVerified: null },
                        { otpExpires: { not: null } },
                        { otpExpires: { lt: now } },
                        ],
                    }
                ],
            },
        });

        return NextResponse.json({
            message: 'Successfully processed unverified user cleanup.',
            deletedCount: result.count,
        }, { status: 200 });

    } catch (error) {
        console.error('Error deleting unverified users:', error);
        let errorMessage = 'Internal server error';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return NextResponse.json({ message: 'Error deleting unverified users', error: errorMessage }, { status: 500 });
    }
}
