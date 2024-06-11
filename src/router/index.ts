import HomeView from "@/views/HomeView.vue";
import MonsterListView from "@/views/MonsterListView.vue";
import MonsterDetailView from "@/views/MonsterDetailView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: MonsterListView,
    },
    {
      path: "/details/:id",
      name: "details",
      component: MonsterDetailView,
    },
  ],
});

export default router;
