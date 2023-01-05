<template>
  <div>
    <h2>Gestioneaza-ti bugetul</h2>
    <h3 class="my-3">Adauga cheltuieli</h3>
    <PurchaseForm />
    <button
      @click="displayAllPurchases"
      class="d-block m-auto mb-3 rounded-2 p-2"
    >
      Cheltuieli
    </button>
    <div v-show="showAllPurchases">
      <div
        class="d-inline-block"
        v-for="(purchase, index) in purchases"
        :key="index"
      >
        <PurchaseCard :purchase="purchase" />
      </div>
    </div>
    <PurchaseCategory />
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
import PurchaseForm from "@/components/PurchaseForm";
import PurchaseCategory from "@/components/PurchaseCategory";

export default {
  name: "PurchaseList",
  // eslint-disable-next-line vue/no-unused-components
  components: { PurchaseCategory, PurchaseForm, PurchaseCard },
  data() {
    return {
      purchases: this.$store.state.purchases,
      showAllPurchases: false,
      categoryWithMaxPrice: "",
    };
  },
  methods: {
    displayAllPurchases() {
      this.showAllPurchases = !this.showAllPurchases;
    },
    getCategoryWithMaxPrice() {
      this.$store.getters.getCategoryWithMaxPrice(this.categoryWithMaxPrice);
    },
  },
};
</script>

<style></style>
