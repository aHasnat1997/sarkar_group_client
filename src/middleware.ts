import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const commonPrivateRoutes = ["/dashboard"];

const roleBasedPrivateRoutes = {
  admin: "/dashboard/admin",
  projectManager: "/dashboard/project_manager",
  engineer: "/dashboard/engineer",
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Correct way to access cookies in middleware
  // const token = request.cookies.get('refreshToken')?.value;
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = token.role as string;

  // Redirect if accessing common dashboard route without specific role path
  if (commonPrivateRoutes.includes(pathname)) {
    let userRole = role.toLowerCase();
    if (role === "SUPER_ADMIN") {
      userRole = "admin";
    }
    return NextResponse.redirect(
      new URL(`/dashboard/${userRole}`, request.url)
    );
  }

  // Role-based path checks
  if (
    pathname.startsWith(roleBasedPrivateRoutes.admin) &&
    role !== "SUPER_ADMIN" &&
    role !== "ADMIN"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    pathname.startsWith(roleBasedPrivateRoutes.projectManager) &&
    role !== "PROJECT_MANAGER"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    pathname.startsWith(roleBasedPrivateRoutes.engineer) &&
    role !== "ENGINEER"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow access if nothing matches
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
