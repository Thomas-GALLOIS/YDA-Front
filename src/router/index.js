import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Connexion from "../views/Connexion.vue";
import AddService from "../views/AddService.vue";
import DashBoard from "../views/DashBoardAdmin.vue";
import AddAccountByAdmin from "../views/AddAccountByAdmin.vue";
import CatalogueServices from "../views/Catalogue/CatalogueServices.vue";
import CatalogueProducts from "../views/Catalogue/CatalogueProducts.vue";
import Initialisation from "../views/InitialisationForm.vue";

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
    name: "AddService",
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

  {
    path: "/catalogue/services",
    name: "CatalogueServices",
    component: CatalogueServices,
  },
  {
    path: "/catalogue/products",
    name: "CatalogueProducts",
    component: CatalogueProducts,
    props: true,
  },
  {
    path: "/initialisation",
    name: "initialisation",
    component: Initialisation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
