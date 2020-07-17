import Vue from "vue";
import VueRouter from "vue-router";

import xzh from "@/components/SignupOrdinary";
import Topimg from "../components/Topimg";
import Home from "../views/TEST";
import index from "../views/index";
import SignupCompany from "../components/SignupCompany";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: "/",
    component: index
  },
  {
    path: "/SignupCompany",
    component: SignupCompany
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
