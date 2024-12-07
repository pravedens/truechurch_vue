import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../pages/HomeView.vue";

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

  { path: "/portfolio", name: "Portfolio", component: () => import("../pages/PortfolioView.vue") },

  { path: "/login", name: "Login", component: () => import("../pages/Auth/Login.vue") },

  { path: "/register", name: "Register", component: () => import("../pages/Auth/Register.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
