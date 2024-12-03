import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TUser } from './types';
import { jwtDecode } from 'jwt-decode';

const commonPrivateRoutes = ['/dashboard'];
const roleBasedPrivateRoutes = {
  admin: ['/dashboard/admin'],
  projectManager: ['/dashboard/project_manager'],
  engineer: ['/dashboard/engineer'],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = cookies().get('refreshToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  };

  const { role } = jwtDecode(token!) as TUser;

  if (pathname === commonPrivateRoutes.find(r => r)) {
    let userRole = role.toLocaleLowerCase();
    if (role === 'SUPER_ADMIN') {
      userRole = 'admin'
    }
    return NextResponse.redirect(new URL(`/dashboard/${userRole}`, request.url))
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.admin.find(r => r)!) && role !== 'SUPER_ADMIN' && role !== 'ADMIN') {
    return NextResponse.redirect(new URL(`/`, request.url))
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.projectManager.find(r => r)!) && role !== 'PROJECT_MANAGER') {
    return NextResponse.redirect(new URL(`/`, request.url))
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.engineer.find(r => r)!) && role !== 'ENGINEER') {
    return NextResponse.redirect(new URL(`/`, request.url))
  }

  // return NextResponse.redirect(new URL('/', request.url));
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
};
