<template>
  <div>
    <h3>Categoria este: {{ categoryWithMinPrice }}</h3>
  </div>
</template>

<script>
export default {
  name: "CheapestCategory",
  data() {
    return {
      categoryWithMinPrice: this.getCategoryWithMinPrice(),
    };
  },
  methods: {
    getCategoryWithMinPrice() {
      return this.$store.getters.getCategoryWithMinPrice;
    },
  },
};
</script>

<style scoped></style>
