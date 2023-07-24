import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import { VueShowdown } from "vue-showdown";
import App from "./App.vue";

import "@unocss/reset/tailwind.css";
import "./github-markdown.css";
import "./style.css";
import "uno.css";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.component("VueShowdown", VueShowdown);
app.mount("#app");
