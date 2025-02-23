// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });
//   console.log(req)
//   console.log("🔹 Token in middleware:", token);  // Token দেখতে হবে
//   const { pathname } = req.nextUrl;

//   if (token) {
//     console.log(`✅ User is authenticated: ${token.email}, Role: ${token.role}`);
//   } else {
//     console.log("❌ No token found, user unauthenticated");
//   }

//   // User is authenticated and trying to access login page
//   if (token && pathname === "/login") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   // User is trying to access dashboard but is not authenticated
//   if (pathname.startsWith("/dashboard") && !token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   // User has role other than 'admin'
//   if (pathname.startsWith("/dashboard") && token?.role !== "admin") {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/login", "/dashboard/:path*"],
// };
import { auth } from "@/auth"; // ✅ NextAuth.js v5 এর জন্য সঠিক ইমপোর্ট
import { NextRequest, NextResponse } from "next/server";

// 🔹 আলাদা ভাবে প্রোটেক্টেড ও প্রাইভেট রুট ডিফাইন করুন
const protectedRoutes = ["/dashboard", "/profile"];
const privateRoutes = ["/admin", "/settings"];

export async function middleware(req: NextRequest) {
  const session = await auth(); // ✅ NextAuth.js v5 অনুযায়ী সেশন চেক করা হচ্ছে
  const pathname = req.nextUrl.pathname;

  // 🔹 লগড ইন না থাকলে প্রোটেক্টেড রুট ব্লক করবে
  if (protectedRoutes.includes(pathname) && !session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 🔹 শুধুমাত্র "admin" রোল ইউজারদের জন্য প্রাইভেট রুট ব্লক করবে
  if (privateRoutes.includes(pathname) && session?.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...protectedRoutes, ...privateRoutes], // ✅ matcher এ ভেরিয়েবল ব্যবহার করা হলো
};
