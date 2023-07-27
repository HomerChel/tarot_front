<template>
  <div class="hello">
    <h2>{{ header }}</h2>
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
  },
  data: () => {
    return {
      header: 'Your interpretation:'
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 40px 0 0;
}
</style>
