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
    path: "/FindPPE",
    name: "FindPPE",
    component: () =>
      import("../views/FindPPE.vue")
  },
  {
    path: "/FindPPE/N95",
    name: "N95",
    component: () =>
      import("../views/N95.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;