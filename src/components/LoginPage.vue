<template>
  <div>
    <span>{{ error }}</span>
    <br>
    <input v-model="email" name="email" :class="{error: emailError}" type="email" placeholder="email" />
    <br>
    <input v-model="password" name="password" :class="{error: passwordError}" type="password" placeholder="password">
    <br>
    <button @click="login">{{ $t('login') }}</button>
  </div>
</template>

<script>
import axios from 'axios';
import validationMixin from '../mixins/validationMixin.js';

export default {
  mixins: [validationMixin],
  name: 'LoginPage',
  data() {
    return {
      error: '',
    }
  },
  methods: {
    async login() {
      this.error = '';
      if (!this.validateFields()) {
        this.error =
          (this.emailError ? this.$t('incorrect_email') : '') +
          (this.passwordError ? this.$t('short_password') : '');
        return;
      }
      
      this.loading = true;
      axios.post(process.env.VUE_APP_API_SERVER + '/auth/login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          localStorage.setItem('JWT_token', response.data.token);
          this.$store.dispatch('fetchLoggedIn');
          this.$router.push({ name: 'home' });
        })
        .catch(error => {
          this.error = error.response.data.message ?? this.$t('request_error');
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
.error {
  border-color: red;
}
</style>
