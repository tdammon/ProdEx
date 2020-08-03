import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/FindPPE",
    name: "FindPPE",
    component: () => import("../views/FindPPE.vue")
  },
  {
    path: "/FindPPE/N95",
    name: "N95",
    component: () => import("../views/N95.vue")
  },
  {
    path: "/FindPPE/Masks",
    name: "Masks",
    component: () => import("../views/Masks.vue")
  },
  {
    path: "/FindPPE/Disinfectants",
    name: "Disinfectants",
    component: () => import("../views/Disinfectants.vue")
  },
  {
    path: "/FindPPE/Sanitizers",
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
