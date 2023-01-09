<template>
  <div>
    <div
      class="d-inline-block"
      v-for="(category, index) in this.$store.state.categories"
      :key="index"
    >
      <button
        :class="{
          'bg-warning': category === 'Haine',
          'bg-secondary': category === 'Mancare',
          'bg-success': category === 'Distractie',
          'bg-primary': category === 'Utilitati',
          'bg-info': category === 'Altele',
        }"
        @click="showPurchases(category)"
        class="rounded-1 btn mx-2 my-2"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonCategories",
  data() {
    return {
      showPurchaseByCategory: false,
    };
  },
  methods: {
    showPurchases(category) {
      this.$emit("show-category", category);
      this.showPurchaseByCategory = !this.showPurchaseByCategory;
    },
  },
};
</script>

<style scoped></style>
