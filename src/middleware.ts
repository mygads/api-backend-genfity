import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Edge Runtime compatible JWT verification
async function verifyJWT(token: string, secret: string) {
    try {
        // Split the JWT token
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('Invalid JWT format');
        }

        const [headerB64, payloadB64, signatureB64] = parts;
        
        // Decode header and payload
        const header = JSON.parse(atob(headerB64.replace(/-/g, '+').replace(/_/g, '/')));
        const payload = JSON.parse(atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/')));
        
        // Check if token is expired
        if (payload.exp && Date.now() >= payload.exp * 1000) {
            throw new Error('Token expired');
        }

        // Create signature to verify
        const encoder = new TextEncoder();
        const data = encoder.encode(`${headerB64}.${payloadB64}`);
        const key = await crypto.subtle.importKey(
            'raw',
            encoder.encode(secret),
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['sign', 'verify']
        );

        // Verify signature
        const signature = Uint8Array.from(
            atob(signatureB64.replace(/-/g, '+').replace(/_/g, '/')),
            c => c.charCodeAt(0)
        );
        
        const isValid = await crypto.subtle.verify(
            'HMAC',
            key,
            signature,
            data
        );

        if (!isValid) {
            throw new Error('Invalid signature');
        }        return payload;
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`JWT verification failed: ${errorMessage}`);
    }
}

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const apiKey = req.headers.get('API-KEY');
    const serverApiKey = process.env.INTERNAL_CLIENT_API_KEY;    // Define API routes that require API key authentication
    // Note: Customer authentication APIs are now public (no API key required)
    const apiKeyProtectedApiRoutes: string[] = [
        // All customer authentication APIs are now public
        // '/api/auth/signin',
        // '/api/auth/signup',
        // '/api/auth/send-otp',
        // '/api/auth/verify-otp',
        // '/api/auth/reset-password',
        // '/api/auth/resend-otp',
        // '/api/auth/session'
    ];

    // Handle API key protection for specific API routes
    if (apiKeyProtectedApiRoutes.includes(pathname)) {
        if (req.method === "OPTIONS") {
            return NextResponse.next(); // biarkan handler OPTIONS di route yang handle CORS
        }
        if (!serverApiKey) {
            console.error('CRITICAL: API_ACCESS_KEY environment variable is not set.');
            return NextResponse.json({ message: 'Internal Server Error: API key not configured' }, { status: 500 });
        }
            if (apiKey !== serverApiKey) {
            return NextResponse.json({ message: 'Unauthorized: Invalid or missing API Key' }, { status: 401 });
        }
        // If API key is valid, allow the request to proceed to the API route handler.
        // No further NextAuth session token checks are performed for these specific API routes.
        return NextResponse.next();    }    // Ambil token hanya sekali di awal
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
      // Check for JWT token in Authorization header if NextAuth token is not present
    let jwtToken = null;
    if (!token) {
        const authHeader = req.headers.get('authorization');
        if (authHeader && authHeader.startsWith('Bearer ')) {
            try {
                const jwtSecret = process.env.JWT_SECRET || 'dev-secret-key';
                jwtToken = await verifyJWT(authHeader.substring(7), jwtSecret);
            } catch (error) {
                console.error('JWT verification failed:', error);
            }
        }
    }

    // Customer API routes - allow authenticated customers
    if (pathname.startsWith('/api/customer')) {
        // All customer APIs require authentication except catalog APIs
        const publicCustomerRoutes = [
            '/api/customer/catalog/packages',
            '/api/customer/catalog/addons',
            '/api/customer/catalog/categories',
            '/api/customer/catalog/details',
            '/api/customer/whatsapp/packages',
        ];
        
        if (!publicCustomerRoutes.includes(pathname) && req.method !== 'OPTIONS') {
            if (!token && !jwtToken) {
                return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
            }
            // If using JWT token, add user info to request headers for API routes
            if (jwtToken && !token) {
                const requestHeaders = new Headers(req.headers);
                requestHeaders.set('x-user-id', jwtToken.id);
                requestHeaders.set('x-user-email', jwtToken.email || '');
                requestHeaders.set('x-user-role', jwtToken.role || 'customer');
                return NextResponse.next({
                    request: {
                        headers: requestHeaders,
                    },
                });
            }
        }
        return NextResponse.next();
    }

    // Proteksi admin untuk semua API produk (selain GET/public)
    if (pathname.startsWith('/api/product')) {
        // Hanya batasi method selain GET (POST, PUT, PATCH, DELETE, dsb)
        if (!['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
            if (!token || token.role !== 'admin') {
                return NextResponse.json({ message: 'Forbidden: Admin only' }, { status: 403 });
            }
        }
    }

    // Protect UI dashboard routes (admin only)
    if (pathname.startsWith('/dashboard')) {
        if (!token) {
            // Belum login, redirect ke signin dengan callbackUrl
            const signInUrl = new URL('/auth/signin', req.url);
            signInUrl.searchParams.set('callbackUrl', req.url);
            return NextResponse.redirect(signInUrl);
        } else if (token.role !== 'admin') {
            // Sudah login tapi bukan admin, hapus session dan redirect ke signin tanpa callbackUrl (agar tidak loop)
            const signInUrl = new URL('/auth/signin', req.url);
            const response = NextResponse.redirect(signInUrl);
            response.cookies.set('next-auth.session-token', '', { path: '/', maxAge: 0 });
            response.cookies.set('__Secure-next-auth.session-token', '', { path: '/', maxAge: 0 });
            return response;
        }
        // If authenticated and admin, allow access to UI dashboard routes
        return NextResponse.next();
    }

    // If trying to access UI auth pages (e.g., /auth/signin page, not the API)
    if (pathname.startsWith('/auth/signin') || pathname.startsWith('/auth/signup')) {
        if (token) {
            // If authenticated, redirect from UI auth pages to dashboard
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
        // If not authenticated, allow access to UI auth pages
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
