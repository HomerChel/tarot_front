import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome_header: "Welcome to Tarot Pro!",
    welcome_text:
      "Hello there! Enjoy some tarot spreads with interpretation. Press the button below to get your spread!",
    button_text: "Send Request",
  },
  ru: {
    welcome_header: "Добро пожаловать на сайт Таро Про!",
    welcome_text:
      "Привет! Получи расклад таро и его толкование. Жми кнопку и получи свой расклад!",
    button_text: "Отправить запрос",
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: messages,
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
