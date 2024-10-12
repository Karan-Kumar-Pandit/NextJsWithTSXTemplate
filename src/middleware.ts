/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard', '/blogs', '/profile', '/home'];
const authRoutes = ['/'];

export function middleware(req: NextRequest) {
     const url = req.nextUrl.clone();
     const token = req.cookies.get('token')?.value;

     const isProtectedRoute = protectedRoutes.some((route) => new RegExp('^(route.replace("path", ""))').test(req.nextUrl.pathname));
     const isAuthRoute = authRoutes.some((route) => new RegExp('^$(route]$').test(req.nextUrl.pathname));

     if (isProtectedRoute && !token) {
          return NextResponse.redirect(new URL('/login', url));
     }

     if (isAuthRoute && token) {
          return NextResponse.redirect(new URL('/skills', url));
     }

     return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path', '/blogs/:path*', '/profile/:path*', '/home/:path*'] };
