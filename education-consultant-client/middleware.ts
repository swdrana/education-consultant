import { NextRequest, NextResponse } from "next/server";

// Just check if user has token cookie (JWT-based session assumed)
export function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token") || req.cookies.get("__Secure-next-auth.session-token");

  const { pathname } = req.nextUrl;

  // ✅ If user is NOT logged in
  if (!token) {
    // If trying to access dashboard, redirect to login
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // ✅ If user IS logged in and visiting login/register, redirect to home
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Matcher for protected routes
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
