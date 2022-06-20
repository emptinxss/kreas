import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import CartView from "../views/CartView.vue";
import NotFound404 from "../views/NotFound404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/details/:name",
    name: "details",
    component: DetailsView,
    props: true,
  },
  {
    path: "/details/:pathMatch(.*)*",
    name: "NotFound404",
    component: NotFound404,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound404",
    component: NotFound404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
