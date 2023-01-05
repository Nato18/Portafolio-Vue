import { createRouter, createWebHashHistory } from "vue-router";

import inicio from "../modules/pages/inicio";

const routes = [
  { path: "/", component: inicio, meta: { title: "Renato Parraguez" } },
  { path: "/AcercaMi", component: inicio, meta: { title: "Renato Parraguez" } },
  { path: "/Tecnologias", component: inicio, meta: { title: "Renato Parraguez" } },
  { path: "/Proyectos", component: inicio, meta: { title: "Renato Parraguez" } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
