/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import StorageService from './shared/storage.service';

const protectedRoutes = ['/dashboard', '/blogs', '/profile', '/home'];

export function middleware(req: NextRequest, res: NextResponse) {
     const url = req.nextUrl.clone();
     const token = req.cookies.get('token')?.value;

     const isProtectedRoute = protectedRoutes.some((route) => new RegExp(`^${route.replace('path', '')}$`).test(req.nextUrl.pathname));

     if (isProtectedRoute && !token) {
          return NextResponse.redirect(new URL('/', url));
     }

     return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path', '/blogs/:path*', '/profile/:path*', '/home/:path*'] };
