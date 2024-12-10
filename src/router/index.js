import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/HomeView.vue";
import { userAuthStore } from "../stores/authStore";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/post",
    name: "Post",
    component: () => import("../pages/PostView.vue"),
  },

  { path: "/event", name: "Event", component: () => import("../pages/EventView.vue") },

  { path: "/about", name: "About", component: () => import("../pages/AboutView.vue") },

  { path: "/portfolio", name: "Portfolio", component: () => import("../pages/PortfolioView.vue"), meta: { requiresAuth: true } }, //Если пользователь не аутентифицирован, то он перейдет на стронитцу login

  { path: "/login", name: "Login", component: () => import("../pages/Auth/Login.vue"), meta: { requiresGuest: true } },

  { path: "/register", name: "Register", component: () => import("../pages/Auth/Register.vue"), meta: { requiresGuest: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = userAuthStore();
  if (to.meta.requiresAuth && !store.isLoggin) {
    // Если маршрут требует аутентификации и пользователь не вошел в систему
    next('/login'); // Перейдите на страницу входа
  }
  else if (to.meta.requiresGuest && store.isLoggin) {
    next('/')
  }
  else {
    next(); // Разрешить доступ к маршрутам
  }
})

export default router;
