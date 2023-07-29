import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const translations = {
  en: {
    welcome_header: "Welcome to Tarot Pro!",
    welcome_text:
      "Hello there! Enjoy some tarot spreads with interpretation. Ask your question and press the button below to get your spread!",
    button_text: "Send Request",
    textarea_placeholder: "Write your question here",
    your_interpretation: "Your interpretation:",
  },
  ru: {
    welcome_header: "Добро пожаловать на сайт Таро Про!",
    welcome_text:
      "Привет! Получи расклад таро и его толкование. Напиши вопрос, нажми на кнопку и получи расклад!",
    button_text: "Отправить запрос",
    textarea_placeholder: "Напишите здесь свой вопрос",
    your_interpretation: "Толкование:",
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: translations,
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
