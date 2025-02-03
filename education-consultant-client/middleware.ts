import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET! });
  console.log(req)
  console.log("🔹 Token in middleware:", token);  // Token দেখতে হবে
  const { pathname } = req.nextUrl;

  if (token) {
    console.log(`✅ User is authenticated: ${token.email}, Role: ${token.role}`);
  } else {
    console.log("❌ No token found, user unauthenticated");
  }

  // User is authenticated and trying to access login page
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // User is trying to access dashboard but is not authenticated
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // User has role other than 'admin'
  if (pathname.startsWith("/dashboard") && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};




// import { NextResponse } from 'next/server'
// import { auth } from './auth'

// export default auth(async function middleware(req) {
//   const { pathname } = req.nextUrl

//   console.log('==================')
//   console.log(req.auth )
//   // Accessing the user's session or token
//   const session = req.auth
//   const user =  session?.user
  
//   console.log("🔹 Token in middleware:", user)  // Log token for debugging

//   // if (user) {
//   //   console.log(`✅ User is authenticated: ${user.email}, Role: ${user.role}`)
//   // } else {
//   //   console.log("❌ No token found, user unauthenticated")
//   // }

//   // // User is authenticated and trying to access login page
//   // if (user && pathname === "/login") {
//   //   return NextResponse.redirect(new URL("/", req.url))
//   // }

//   // // User is trying to access dashboard but is not authenticated
//   // if (pathname.startsWith("/dashboard") && !user) {
//   //   return NextResponse.redirect(new URL("/login", req.url))
//   // }

//   // // User has role other than 'admin'
//   // if (pathname.startsWith("/dashboard") && user?.role !== "admin") {
//   //   return NextResponse.redirect(new URL("/", req.url))
//   // }

//   // return NextResponse.next()
// })

// export const config = {
//   matcher: ["/login", "/dashboard/:path*"],
// }
