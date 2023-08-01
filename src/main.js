import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import translations from "./data/translations";
import router from './router'
import store from './store';
import App from "./App.vue";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: translations,
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);
app.mount("#app");
