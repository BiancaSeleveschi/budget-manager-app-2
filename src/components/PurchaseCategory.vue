<template>
  <div>
    <h4>Cheltuielile pe categorii</h4>
    <ButtonCategories @show-category="showPurchasesByCategory" />
    <div v-show="showPurchase" class="border border-1 mb-4 p-3">
      <h4>Sorteaza categoria dupa pret</h4>
      <button @click="sortBy" class="btn btn-outline-success">Sort</button>
      <ItemCard :purchases="purchases" />
    </div>
  </div>
</template>

<script>
import ButtonCategories from "@/components/ButtonCategories";
import ItemCard from "@/components/ItemCard";

export default {
  name: "PurchaseCategory",
  components: { ButtonCategories, ItemCard },
  data() {
    return {
      purchases: this.$store.state.purchases,
      showPurchase: false,
      category: "",
    };
  },
  methods: {
    showPurchasesByCategory(category) {
      this.purchases = this.$store.getters.getPurchasesByCategory(category);
      this.showPurchase = true;
    },
    sortBy(category) {
      this.purchases =
        this.$store.getters.getPurchaseInCategoriesByPrice(category);
    },
  },
};
</script>

<style scoped></style>
