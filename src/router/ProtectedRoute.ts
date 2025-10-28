// src/router/protectedRoute.ts
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function requireAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const token = localStorage.getItem('authToken')

  const isAuthenticated =
    Boolean(token) && token !== 'null' && token !== 'undefined'

  if (!isAuthenticated) {
    // redirect to login and preserve where the user tried to go
    next({
      path: '/login',
      query: { redirect: to.fullPath },
      replace: true,
    })
  } else {
    next()
  }
}
