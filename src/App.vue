<template>
  <LanguageSelector />
  <TopMenu />
  <img alt="Tarot Pro logo" src="./assets/logo.jpg" class="logo">
  <router-view />
</template>

<script>
import LanguageSelector from './components/LanguageSelector.vue'
import TopMenu from './components/TopMenu.vue';

export default {
  name: 'App',
  components: {
    LanguageSelector,
    TopMenu
},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 200px;
  max-width: 90%;
  margin: 10px;
}
</style>
