import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const commonPrivateRoutes = ['/dashboard'];

const roleBasedPrivateRoutes = {
  admin: '/dashboard/admin',
  projectManager: '/dashboard/project_manager',
  engineer: '/dashboard/engineer',
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get token from NextAuth
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Get user data from token - handle different possible structures
  const user = token.user || token;
  const userRole = user.role || token.role;


  // Redirect if accessing common dashboard route without specific role path
  if (commonPrivateRoutes.includes(pathname)) {
    if (!userRole) {
      // If no role, redirect to general dashboard or login
      return NextResponse.redirect(new URL('/login', request.url));
    }

    let roleRoute = userRole.toLowerCase();
    if (userRole === 'SUPER_ADMIN' || userRole === 'super_admin') {
      roleRoute = 'admin';
    } else if (userRole === 'PROJECT_MANAGER' || userRole === 'project_manager') {
      roleRoute = 'project_manager';
    } else if (userRole === 'ENGINEER' || userRole === 'engineer') {
      roleRoute = 'engineer';
    }
    return NextResponse.redirect(new URL(`/dashboard/${roleRoute}`, request.url));
  }

  // Role-based path checks
  if (pathname.startsWith(roleBasedPrivateRoutes.admin) &&
    userRole !== 'SUPER_ADMIN' && userRole !== 'ADMIN' &&
    userRole !== 'super_admin' && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.projectManager) &&
    userRole !== 'PROJECT_MANAGER' && userRole !== 'project_manager') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.engineer) &&
    userRole !== 'ENGINEER' && userRole !== 'engineer') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow access if nothing matches
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
