import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Auth',
    component: () => import('@/pages/auth/AuthPage.vue'),
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: () => import('@/pages/lobby/LobbyPage.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/create-room',
    name: 'Create-room',
    component: () => import('@/pages/create-room/CreateRoom.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/waiting-room/:id',
    name: 'Waiting-room',
    component: () => import('@/pages/waiting-room/WaitingRoom.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/battle-room/:id',
    name: 'Battle-room',
    component: () => import('@/pages/battle-room/BattleRoom.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/not-found/NotFoundPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to: any) => {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    return '/login';
  }

  if (to.path === '/' && token) {
    return '/lobby';
  }
});

export default router;
