<template>
  <WelcomeText />
  <SpreadComponent />
</template>

<script>
import WelcomeText from './Home/WelcomeText.vue'
import SpreadComponent from './SpreadComponent.vue';


export default {
  name: 'HomePage',
  components: {
    WelcomeText,
    SpreadComponent
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
}
</script>
