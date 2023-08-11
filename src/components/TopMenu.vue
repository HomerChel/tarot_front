<template>
  <div class="menu">
    <router-link to="/">{{ $t('home') }}</router-link>
    <router-link v-if="!isLoggedIn" to="/login">{{ $t('login') }}</router-link>
    <router-link v-if="!isLoggedIn" to="/register">{{ $t('register') }}</router-link>
    <router-link v-if="isLoggedIn" to="/account">{{ $t('account') }}</router-link>
    <a v-if="isLoggedIn" href="javascript:void(0)" @click="logout">{{ $t('logout') }}</a>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  methods: {
    async logout() {
      localStorage.removeItem('JWT_token');
      this.$store.dispatch('fetchLoggedIn');
      this.$router.push({ name: 'home' });
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
}
</script>

<style scoped>
.menu a {
  margin: 10px;
}
</style>