import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    const user = await middlewareAuth(request);
    if (user) return NextResponse.redirect(new URL(`/`, request.url));
  }
  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL(`/signin`, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*", "/signin", "/signup"],
};

