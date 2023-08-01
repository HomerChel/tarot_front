<template>
  <div class="menu">
    <router-link to="/">Home</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
    <router-link v-if="isLoggedIn" to="/account">Account</router-link>
    <a v-if="isLoggedIn" href="javascript:void(0)" @click="logout">Logout</a>
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