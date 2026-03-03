import { auth } from "@/auth";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const isOnAdminArea = req.nextUrl.pathname.startsWith("/admin");
    const isLoginPage = req.nextUrl.pathname === "/admin/login";

    if (isOnAdminArea && !isLoginPage && !isLoggedIn) {
        return Response.redirect(new URL("/admin/login", req.nextUrl));
    }
});

export const config = {
    matcher: ["/admin/:path*"],
};
