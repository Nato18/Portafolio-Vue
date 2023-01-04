import { createRouter, createWebHashHistory } from "vue-router";

import inicio from "../modules/pages/inicio";

const routes = [{ path: "/", component: inicio }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router