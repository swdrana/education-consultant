import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token")?.value;

  console.log("🔹 Token in middleware:", token);

  const { pathname } = req.nextUrl;

  if (token) {
    console.log("✅ User is authenticated");
  } else {
    console.log("❌ No token found, user unauthenticated");
  }

  // User is authenticated and trying to access login or register page
  if ((token && pathname === "/login") || (token && pathname === "/register")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // User is trying to access dashboard but is not authenticated
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
