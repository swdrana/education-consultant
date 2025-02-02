import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET! });

  console.log("🔹 Token in middleware:", token);

  const { pathname } = req.nextUrl;

  if (token) {
    console.log(`✅ User is authenticated: ${token.email}, Role: ${token.role}`);
  } else {
    console.log("❌ No token found, user unauthenticated");
  }

  // 🔹 যদি user লগইন করা থাকে এবং login page এ যেতে চায়, তাহলে তাকে home (/) এ পাঠিয়ে দাও
  if (token && pathname === "/login") {
    console.log("🔄 Redirecting authenticated user away from login page");
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 🔹 যদি user dashboard এ যেতে চায় কিন্তু token না থাকে, তাহলে তাকে login page এ পাঠিয়ে দাও
  if (pathname.startsWith("/dashboard") && !token) {
    console.log("🔄 Redirecting unauthenticated user to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔹 যদি user token রাখে কিন্তু তার role "admin" না হয়, তাহলে home (/) এ পাঠিয়ে দাও
  if (pathname.startsWith("/dashboard") && token?.role !== "admin") {
    console.log("🔄 Redirecting non-admin user to /");
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"], // Login & Dashboard এর জন্য middleware কাজ করবে
};
