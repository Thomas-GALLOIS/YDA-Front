import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Connexion from "../views/Connexion.vue";
import AddService from "../views/AddService.vue";
import DashBoard from "../views/DashBoardAdmin.vue";
import AddAccountByAdmin from "../views/AddAccountByAdmin.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion,
  },
  {
    path: "/addService",
    name: "addService",
    component: AddService,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashBoard,
  },

  {
    path: "/creation",
    name: "Creation",
    component: AddAccountByAdmin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
