<template>
  <LanguageSelector />
  <img alt="Vue logo" src="./assets/logo.jpg">
  <WelcomeText :key="$i18n.locale" />
  <SendRequestButton @clicked="fetchInterpretation" :key="$i18n.locale" />
  <SpreadList v-if="showInterpretation" :cardsData="spreadData" />
  <InterpretationText v-if="showInterpretation" :interpretation="interpretation"/>
</template>

<script>
import axios from 'axios';
import WelcomeText from './components/WelcomeText.vue'
import SendRequestButton from './components/SendRequestButton.vue'
import InterpretationText from './components/InterpretationText.vue'
import SpreadList from './components/SpreadList.vue'
import LanguageSelector from './components/LanguageSelector.vue'

export default {
  name: 'App',
  components: {
    WelcomeText,
    SendRequestButton,
    InterpretationText,
    SpreadList,
    LanguageSelector
  },
  data() {
    return {
      showInterpretation: false,
      interpretation: '',
      spreadData: null
    }
  },
  methods: {
    async fetchInterpretation() {
      axios.get(process.env.VUE_APP_API_SERVER + '/spread3/' + this.$i18n.locale, {
        headers: {
          'X-API-KEY': process.env.VUE_APP_X_API_KEY
        }
      })
        .then(response => {
          this.interpretation = response.data.answer;
          this.showInterpretation = true;
          this.spreadData = [];
          for (const card of response.data.cards) {
            this.spreadData.push({
              src: '/cards/' + card.img,
              reversed: card.reversed
            })
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
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
</style>
