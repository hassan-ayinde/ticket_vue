import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Layout from "../components/Layout.vue";
import Header from "../components/Header.vue";
import Features from "../components/Features.vue";
import Video from "../components/Video.vue";
import EmailUpdate from "../components/EmailUpdate.vue";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import TicketPortal from "../components/TicketPortal.vue";
import { h } from "vue";

const isAuthenticated = () => !!localStorage.getItem("authToken");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: {
          render() {
            return h("div", [h(Header), h(Features), h(Video), h(EmailUpdate)]);
          },
        },
      },
      { path: "login", component: Login },
      { path: "dashboard", component: Dashboard, meta: { requiresAuth: true } },
      { path: "ticketportal", component: TicketPortal },
      { path: "/:pathMatch(.*)*", redirect: "/login" },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
