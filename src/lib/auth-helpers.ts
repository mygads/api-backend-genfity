import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export interface UserAuthInfo {
  id: string;
  email: string;
  role: string;
}

/**
 * Get user authentication information from either NextAuth session or JWT token headers
 * @param request - The request object
 * @returns User auth info or null if not authenticated
 */
export async function getUserAuth(request: Request): Promise<UserAuthInfo | null> {
  // First try to get NextAuth session
  const session = await getServerSession(authOptions);
  if (session?.user?.id) {
    return {
      id: session.user.id,
      email: session.user.email || '',
      role: session.user.role || 'customer'
    };
  }

  // If no NextAuth session, check for JWT token headers (set by middleware)
  const userId = request.headers.get('x-user-id');
  const userEmail = request.headers.get('x-user-email');
  const userRole = request.headers.get('x-user-role');

  if (userId) {
    return {
      id: userId,
      email: userEmail || '',
      role: userRole || 'customer'
    };
  }

  return null;
}
