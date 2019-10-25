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
    },
    {
      path: "/personal-center",
      name: "personal-center",
      component: () => import("./views/Personal-center")
    },
    {
      path: "/user",
      name: "user",
      component: () => import("./views/User")
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("./views/Mine")
    },
    {
      path: "/shopping-trolley",
      name: "shopping-trolley",
      component: () => import("./views/Shopping-trolley")
    },
    {
      path: "/serve",
      name: "serve",
      component: () => import("./views/Serve")
    }
  ]
});
