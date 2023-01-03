<template>
  <div>
    <input v-model="purchaseName" type="text" placeholder="Nume" />
    <input v-model="purchasePrice" type="number" placeholder="Pret" />
    <input v-model="purchaseCategory" placeholder="Categorie" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Purchase",
  data() {
    return {
      purchaseName: "",
      purchasePrice: "",
      purchaseCategory: "",
    };
  },
  methods: {
    addPurchase() {},
  },
};
</script>

<style scoped></style>
