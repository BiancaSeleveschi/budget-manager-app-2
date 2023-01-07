<template>
  <div class="mb-5">
    <h4 class="mt-5 mb-3">Sortarea categoriilor dupa:</h4>
    <button @click="sortByPrice" class="btn btn-outline-success">Pret</button>
    <div v-show="showPurchaseSortByPrice">
      <ItemCard :purchases="purchasesSortByPrice" />
    </div>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
  name: "PurchaseSortedByPrice",
  components: { ItemCard },
  data() {
    return {
      purchasesSortByPrice: [],
      showPurchaseSortByPrice: false,
    };
  },
  methods: {
    sortByPrice() {
      this.purchasesSortByPrice = this.$store.getters.getCategoryByPrice;
      this.showPurchaseSortByPrice = !this.showPurchaseSortByPrice;
    },
  },
};
</script>

<style scoped></style>
