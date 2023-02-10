import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import directives from "@/directives";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

export const app = createSSRApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(createPinia());
app.use(router);

app.mount("#app");