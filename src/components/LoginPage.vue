<template>
  <div>
    <span>{{ error }}</span>
    <br>
    <input v-model="email" type="email" placeholder="email" />
    <br>
    <input v-model="password" type="password" placeholder="password">
    <br>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      error: '',
    }
  },
  methods: {
    async login() {
      this.error = '';
      this.loading = true;
      axios.post(process.env.VUE_APP_API_SERVER + '/auth/login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log(response.data);
          localStorage.setItem('JWT_token', response.data.token);
        })
        .catch(error => {
          this.error = error.response.data.message ?? 'Smth went wrong. Please try again later.'
          if (!error.response.data.message) console.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>

<style scoped>
span {
  color: red;
}
</style>
