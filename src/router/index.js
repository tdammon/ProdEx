import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category",
    name: "FindPPE",
    component: () => import("../views/FindPPE.vue")
  },
  {
    path: "/category/n95",
    name: "N95",
    component: () => import("../views/N95.vue")
  },
  {
    path: "/category/masks",
    name: "Masks",
    component: () => import("../views/Masks.vue")
  },
  {
    path: "/category/disinfectants",
    name: "Disinfectants",
    component: () => import("../views/Disinfectants.vue")
  },
  {
    path: "/category/sanitizers",
    name: "Sanitizers",
    component: () => import("../views/Sanitizers.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

export default router;