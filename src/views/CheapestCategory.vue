<template>
  <div>
    <h3>
      Categoria este:
      <span
        v-show="!showPurchase"
        @click="openPurchase"
        class="bg-secondary rounded-2 p-3"
        >{{ categoryWithMinPrice }}</span
      >
      <div v-for="(purchase, index) in purchases" :key="index">
        <div
          v-show="purchase.category === categoryWithMinPrice && showPurchase"
        >
          <PurchaseCard
            class="d-inline-block m-auto mt-3"
            :purchase="purchase"
          />
        </div>
      </div>
    </h3>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";

export default {
  name: "CheapestCategory",
  components: { PurchaseCard },
  data() {
    return {
      categoryWithMinPrice: this.getCategoryWithMinPrice(),
      purchases: this.$store.state.purchases,
      showPurchase: false,
    };
  },
  methods: {
    getCategoryWithMinPrice() {
      return this.$store.getters.getCategoryWithMinPrice;
    },
    openPurchase() {
      this.showPurchase = !this.showPurchase;
    },
  },
};
</script>

<style scoped></style>
