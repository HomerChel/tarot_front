<template>
  <div>
    <span>Please copy code from message we sent to {{ email ?? 'your email' }}</span>
    <span>{{ error }}</span>
    <br>
    <input v-model="code" type="text" placeholder="code" />
    <br>
    <button @click="checkCode">Check my code from email</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MailVerificationForm',
  data() {
    return {
      error: ''
    }
  },
  props: ['email'],
  methods: {
    async checkCode() {
      this.error = '';
      this.loading = true;
      axios.post(process.env.VUE_APP_API_SERVER + '/auth/verification',
      {
        code: this.code
      },
      {
        headers: {
          'Authorization': 'bearer ' + localStorage.getItem('JWT_token')
        }
      })
        .then(response => {
          if (response.data.status === 'overdue_code') {
            this.error = this.$t('old_code');
          } else if (response.data.status === 'wrong_code') {
            this.error = this.$t('wrong_code');
          } else if (response.data.status === 'success') {
            this.$router.push({ name: 'home' });
          }
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
</style>
