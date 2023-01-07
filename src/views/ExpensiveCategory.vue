<template>
  <div>
    <h3>
      Categoria este:
      <span
        v-show="!showPurchase"
        @click="openPurchase"
        class="bg-secondary rounded-2 p-3"
        >{{ categoryWithMaxPrice }}</span
      >
      <div v-for="(purchase, index) in purchases" :key="index">
        <div
          v-show="purchase.category === categoryWithMaxPrice && showPurchase"
        >
          <PurchaseCard class="w-25 m-auto mt-3" :purchase="purchase" />
        </div>
      </div>
    </h3>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
export default {
  name: "ExpensiveCategory",
  components: { PurchaseCard },
  data() {
    return {
      purchases: this.$store.state.purchases,
      showPurchase: false,
      categoryWithMaxPrice: this.getCategoryWithMaxPrice(),
    };
  },
  methods: {
    getCategoryWithMaxPrice() {
      return this.$store.getters.getCategoryWithMaxPrice;
    },
    openPurchase() {
      this.showPurchase = !this.showPurchase;
    },
  },
};
</script>

<style scoped></style>
