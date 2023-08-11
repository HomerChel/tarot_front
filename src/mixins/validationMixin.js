export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
    };
  },
  methods: {
    validateFields() {
      this.emailError = false;
      this.passwordError = false;
      let valid = true;

      // Email validation
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!this.email.match(emailPattern)) {
        this.emailError = true;
        valid = false;
      }

      // Password length validation
      if (this.password.length < 6) {
        this.passwordError = true;
        valid = false;
      }

      return valid;
    },
  },
};
