<template>
  <div class="hello">
    <h2>{{ $t('your_interpretation') }}</h2>
    <p>
      {{ interpretation }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'InterpretationText',
  props: {
    interpretation: {
      type: String,
      default: 'Interpretation'
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 40px 0 0;
}
</style>
