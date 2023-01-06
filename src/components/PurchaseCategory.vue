<template>
  <div>
    <h4>Cheltuielile pe categorii</h4>
    <div>
      <ButtonCategories @show-category="showPurchasesByCategory" />
    </div>
    <div v-show="showPurchase">
      <div
        class="d-inline-block"
        v-for="(purchase, index) in purchases"
        :key="index"
      >
        <PurchaseCard :purchase="purchase" />
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
import ButtonCategories from "@/components/ButtonCategories";

export default {
  name: "PurchaseCategory",
  components: { ButtonCategories, PurchaseCard },
  data() {
    return {
      purchases: this.$store.state.purchases,
      showPurchase: false,
    };
  },
  methods: {
    showPurchasesByCategory(category) {
      this.purchases = this.$store.getters.getPurchasesByCategory(category);
      this.showPurchase = true;
    },
  },
};
</script>

<style scoped></style>
