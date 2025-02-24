
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(req: NextRequest) {
  // Retrieve session directly using auth()
  const session = await auth();

  console.log("🔹 Session in middleware:", session); // Check session here
  const { pathname } = req.nextUrl;

  if (session) {
    console.log(`✅ User is authenticated: ${session.user?.email}, Role: ${session.user?.role}`);
  } else {
    console.log("❌ No session found, user unauthenticated");
  }

  // User is authenticated and trying to access login or register page
  if ((session && (pathname === "/login" || pathname === "/register"))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // User is trying to access dashboard but is not authenticated
  if (pathname.startsWith("/dashboard") && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // User has role other than 'admin'
  if (pathname.startsWith("/dashboard") && session?.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};
