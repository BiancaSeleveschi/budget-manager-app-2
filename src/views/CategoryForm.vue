<template>
  <div>
    <h2 class="mb-4">Adauga categorie</h2>
    <input v-model="purchaseCategory" placeholder="category" type="text" />
    <button @click="addCategory" class="add-button">Add</button>
  </div>
</template>

<script>
export default {
  name: "CategoryForm",
  data() {
    return {
      purchaseCategory: "",
    };
  },
  methods: {
    addCategory() {
      this.$store.getters.getPurchasesCategory(this.purchaseCategory);
    },
  },
};
</script>

<style scoped></style>
