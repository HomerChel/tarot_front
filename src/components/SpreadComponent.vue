<template>
  <RequestForm @clicked="fetchInterpretation" :loading="loading" />
  <SpreadList v-if="showInterpretation" :cardsData="spreadData" />
  <InterpretationText v-if="showInterpretation" :interpretation="interpretation" />
</template>

<script>
import axios from 'axios';
import RequestForm from './Spread/RequestForm.vue'
import InterpretationText from './Spread/InterpretationText.vue'
import SpreadList from './Spread/SpreadList.vue'

export default {
  name: 'SpreadComponent',
  components: {
    RequestForm,
    InterpretationText,
    SpreadList,
  },
  data() {
    return {
      showInterpretation: false,
      interpretation: '',
      spreadData: null,
      loading: false
    }
  },
  methods: {
    async fetchInterpretation(question) {
      this.loading = true;
      this.showInterpretation = false;
      axios.get(process.env.VUE_APP_API_SERVER + '/spreads/three-cards/' + this.$i18n.locale, {
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
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>
