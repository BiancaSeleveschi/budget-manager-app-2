<template>
  <div>
    <h3>
      Categoria este:
      <span class="bg-secondary rounded-2 p-3">{{ categoryWithMaxPrice }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "ExpensiveCategory",
  data() {
    return {
      categoryWithMaxPrice: this.getCategoryWithMaxPrice(),
    };
  },
  methods: {
    getCategoryWithMaxPrice() {
      // console.log(this.$store.getters.getCategoryWithMaxPrice);
      return this.$store.getters.getCategoryWithMaxPrice;
    },
  },
};
</script>

<style scoped></style>
