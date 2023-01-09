<template>
  <div>
    <h3>
      Categoria este:
      <button
        :class="{
          'bg-warning': categoryWithMinPrice === 'Haine',
          'bg-secondary': categoryWithMinPrice === 'Mancare',
          'bg-success': categoryWithMinPrice === 'Distractie',
          'bg-primary': categoryWithMinPrice === 'Utilitati',
          'bg-info': categoryWithMinPrice === 'Altele',
        }"
        @click="openPurchase"
        class="rounded-1 btn mx-2 my-2"
      >
        {{ categoryWithMinPrice }}
      </button>
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
