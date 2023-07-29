<template>
  <LanguageSelector />
  <img alt="Tarot Pro logo" src="./assets/logo.jpg" class="logo">
  <WelcomeText :key="$i18n.locale" />
  <RequestForm @clicked="fetchInterpretation" :key="$i18n.locale" />
  <SpreadList v-if="showInterpretation" :cardsData="spreadData" />
  <InterpretationText v-if="showInterpretation" :interpretation="interpretation"/>
</template>

<script>
import axios from 'axios';
import WelcomeText from './components/WelcomeText.vue'
import RequestForm from './components/RequestForm.vue'
import InterpretationText from './components/InterpretationText.vue'
import SpreadList from './components/SpreadList.vue'
import LanguageSelector from './components/LanguageSelector.vue'

export default {
  name: 'App',
  components: {
    WelcomeText,
    RequestForm,
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
    async fetchInterpretation(question) {
      axios.get(process.env.VUE_APP_API_SERVER + '/spread3/' + this.$i18n.locale, {
        headers: {
          'X-API-KEY': process.env.VUE_APP_X_API_KEY
        },params: {
          question: question
        },
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
.logo {
  width: 200px;
  max-width: 90%;
  margin: 10px;
}
</style>
