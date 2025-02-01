import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  // Check if the user is logged in
  const token = await getToken({ req, secret: process.env.AUTH_SECRET! });

  // If the user is logged in, redirect them away from the login page
  if (token && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"], // Only apply middleware to the login page
};
