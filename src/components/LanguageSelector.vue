<template>
  <div>
    <button @click="setLanguage('en')">EN</button>
    <button @click="setLanguage('ru')">RU</button>
  </div>
</template>

<script>
export default {
  name: "LanguageSelector",
  methods: {
    setLanguage(language) {
      this.$i18n.locale = language;
    },
  },
};
</script>
