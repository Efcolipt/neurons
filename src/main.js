import Vue from "vue";
import "@/assets/main.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/components/UI";

Vue.config.productionTip = false;

components.forEach((component) => {
  Vue.component(component.name, component);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
