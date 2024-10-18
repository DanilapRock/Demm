import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Ba from "./pages/Ba.vue";

import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

import "./assets/css/tailwind.css";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Ba",
      name: "Ba",
      component: Ba,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");

app.use(VueSplide);
