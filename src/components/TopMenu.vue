<template>
  <div class="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/account">Account</router-link>
  </div>
</template>

<script>
export default {
  name: 'TopMenu'
}
</script>

<style scoped>
.menu a {
  margin: 10px;
}
</style>