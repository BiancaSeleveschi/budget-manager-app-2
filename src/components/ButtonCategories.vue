<template>
  <div>
    <div
      class="d-inline-block"
      v-for="(category, index) in this.$store.state.categories"
      :key="index"
    >
      <button
        @click="showPurchases(category)"
        class="rounded-1 btn btn-warning mx-2 my-2"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonCategories",
  methods: {
    showPurchases(category) {
      this.$emit("show-category", category);
    },
  },
};
</script>

<style scoped></style>
