import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Allow the maintenance page itself
    if (request.nextUrl.pathname === "/maintenance.html") {
        return NextResponse.next();
    }

    // Optional: allow Vercel health checks
    if (request.nextUrl.pathname.startsWith("/_next")) {
        return NextResponse.next();
    }

    return NextResponse.redirect(
        new URL("/maintenance.html", request.url),
        307
    );
}

export const config = {
    matcher: "/:path*",
};
