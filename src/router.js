import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home")
    },
    {
      path: "/store",
      name: "store",
      component: () => import("./views/Store")
    }
  ]
});
