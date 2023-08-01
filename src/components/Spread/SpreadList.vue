<template>
  <div class="spreadWrapper">
    <img :src="cardsData[0].src" :class="{ rotate180: cardsData[0].reversed }"/>
    <img :src="cardsData[1].src" :class="{ rotate180: cardsData[1].reversed }"/>
    <img :src="cardsData[2].src" :class="{ rotate180: cardsData[2].reversed }"/>
  </div>
</template>

<script>
export default {
  name: "SpreadList",
  props: {
    cardsData: {
      type: Array,
      default: function () {
        return [
          {
            src: "",
            reversed: false,
          },
          {
            src: "",
            reversed: false,
          },
          {
            src: "",
            reversed: false,
          },
        ];
      },
    },
  },
};
</script>

<style scoped>
.spreadWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px; /* adjust this to set space between images */
}

.spreadWrapper img {
  max-width: 27%;
  height: auto;
}

.rotate180 {
  transform: rotate(180deg);
}
</style>
