import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Auth",
    component: () => import("@/pages/auth/AuthPage.vue"),
  },
  {
    path: "/lobby",
    name: "Lobby",
    component: () => import("@/pages/lobby/LobbyPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/not-found/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
