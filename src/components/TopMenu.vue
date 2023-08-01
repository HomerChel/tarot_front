<template>
  <div class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/account">Account</router-link>
    <a href="javascript:void(0)" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  methods: {
    async logout() {
      localStorage.removeItem('JWT_token');
    }
  }
}
</script>

<style scoped>
.menu a {
  margin: 10px;
}
</style>