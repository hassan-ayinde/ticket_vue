export function requireAuth(to, _from, next) {
    const token = localStorage.getItem("authToken");
    const isAuthenticated = Boolean(token) && token !== "null" && token !== "undefined";
    if (!isAuthenticated) {
        // redirect to login and preserve where the user tried to go
        next({
            path: "/login",
            query: { redirect: to.fullPath },
            replace: true,
        });
    }
    else {
        next();
    }
}
