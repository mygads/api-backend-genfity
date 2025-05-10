import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const apiKey = req.headers.get('API-KEY');
    const serverApiKey = process.env.INTERNAL_CLIENT_API_KEY;

    // Define API routes that require API key authentication
    const apiKeyProtectedApiRoutes = [
        '/api/auth/signin',
        // '/api/auth/signup',
        // '/api/auth/send-otp',
        // '/api/auth/verify-otp',
        // '/api/auth/session'
    ];

    // Handle API key protection for specific API routes
    if (apiKeyProtectedApiRoutes.includes(pathname)) {
        if (!serverApiKey) {
            console.error('CRITICAL: API_ACCESS_KEY environment variable is not set.');
            return NextResponse.json({ message: 'Internal Server Error: API key not configured' }, { status: 500 });
        }
            if (apiKey !== serverApiKey) {
            return NextResponse.json({ message: 'Unauthorized: Invalid or missing API Key' }, { status: 401 });
        }
        // If API key is valid, allow the request to proceed to the API route handler.
        // No further NextAuth session token checks are performed for these specific API routes.
        return NextResponse.next();
    }

    // Existing logic for UI pages and other non-API-key-protected routes
    // This part will run if the route is not in apiKeyProtectedApiRoutes
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If trying to access UI auth pages (e.g., /auth/signin page, not the API)
    if (pathname.startsWith('/auth/signin') || pathname.startsWith('/auth/signup')) {
        if (token) {
            // If authenticated, redirect from UI auth pages to dashboard
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
        // If not authenticated, allow access to UI auth pages
        return NextResponse.next();
    }

    // Protect UI dashboard routes
    if (pathname.startsWith('/dashboard')) {
        if (!token) {
            // If not authenticated, redirect to the UI signin page
            const signInUrl = new URL('/auth/signin', req.url);
            signInUrl.searchParams.set('callbackUrl', req.url); // Optionally, add callbackUrl
            return NextResponse.redirect(signInUrl);
        }
        // If authenticated, allow access to UI dashboard routes
        return NextResponse.next();
    }

    // Handle root path ("/") for UI
    if (pathname === '/') {
        if (token) {
            // If authenticated, redirect from root to dashboard
            return NextResponse.redirect(new URL('/dashboard', req.url));
        } else {
            // If not authenticated, redirect from root to UI signin page
            return NextResponse.redirect(new URL('/auth/signin', req.url));
        }
    }

    // For any other routes not covered above, allow them
    return NextResponse.next();
}

// Updated matcher to ensure the middleware runs on all relevant paths,
// including pages and API routes, while excluding static assets.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets (images, etc. ending with common extensions)
     * This ensures the middleware runs for pages and API routes.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
