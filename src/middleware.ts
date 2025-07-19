import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { TUser } from './types';

const commonPrivateRoutes = ['/dashboard'];

const roleBasedPrivateRoutes = {
  admin: '/dashboard/admin',
  projectManager: '/dashboard/project_manager',
  engineer: '/dashboard/engineer',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Correct way to access cookies in middleware
  const token = request.cookies.get('refreshToken')?.value;


  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const user = jwtDecode(token) as TUser;

  // Redirect if accessing common dashboard route without specific role path
  if (commonPrivateRoutes.includes(pathname)) {
    let userRole = user.role.toLowerCase();
    if (user.role === 'SUPER_ADMIN') {
      userRole = 'admin';
    }
    return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url));
  }

  // Role-based path checks
  if (pathname.startsWith(roleBasedPrivateRoutes.admin) && user.role !== 'SUPER_ADMIN' && user.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.projectManager) && user.role !== 'PROJECT_MANAGER') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.engineer) && user.role !== 'ENGINEER') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow access if nothing matches
  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
