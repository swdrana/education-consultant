import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET! });
  console.log("Token in middleware:", token);

  const { pathname } = req.nextUrl;

  // 🔹 যদি user লগইন করা থাকে এবং login page এ যেতে চায়, তাহলে তাকে home (/) এ পাঠিয়ে দাও
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 🔹 যদি user dashboard এ যেতে চায় কিন্তু token না থাকে, তাহলে তাকে login page এ পাঠিয়ে দাও
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔹 যদি user token রাখে কিন্তু তার role "admin" না হয়, তাহলে home (/) এ পাঠিয়ে দাও
  if (pathname.startsWith("/dashboard") && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"], // Login & Dashboard এর জন্য middleware কাজ করবে
};
