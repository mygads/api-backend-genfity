import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const apiKey = request.headers.get('BE-API-Key');
    const expectedApiKey = process.env.INTERNAL_CLIENT_API_KEY;

    // Ensure the API key is configured on the server
    if (!expectedApiKey) {
        console.error('INTERNAL_CLIENT_API_KEY is not set in environment variables.');
        return new NextResponse(
        JSON.stringify({ success: false, message: 'Server configuration error' }),
        { status: 500, headers: { 'content-type': 'application/json' } }
        );
    }

    if (!apiKey || apiKey !== expectedApiKey) {
        return new NextResponse(
        JSON.stringify({ success: false, message: 'Authentication required: Invalid or missing API Key' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/api/auth/[...nextauth]/:path*',
        '/api/auth/signup/:path*',
        '/api/auth/send-otp/:path*',
        '/api/auth/verify-otp/:path*',
        '/api/auth/verify-email/:path*', // Covers /api/auth/verify-email/[token]
        '/api/auth/reset-password/:path*',
        '/api/auth/session/:path*', // NextAuth.js session endpoint
        '/api/account/resend-verification-email/:path*', // Covers all routes under /api/account
    ],
};
