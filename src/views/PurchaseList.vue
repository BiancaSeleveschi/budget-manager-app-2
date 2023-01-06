<template>
  <div>
    <h2>Gestioneaza-ti bugetul</h2>
    <button
      @click="displayAllPurchases"
      class="d-block m-auto mb-3 rounded-2 p-2 btn btn-dark fw-bold"
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
    <p class="my-3">
      Vezi categoria pentru care s-au cheltuit cei mai multi bani
      <router-link :to="{ name: 'expensive-category' }">aici</router-link>
    </p>
    <p class="my-3">
      Vezi categoria pentru care s-au cheltuit cei mai putini bani
      <router-link :to="{ name: 'cheapest-category' }">aici</router-link>
    </p>
    <div class="p-3 bg-primary bg-opacity-75">
      <h5 class="fw-bold mb-3">Vezi cheltuielile in functie de pret:</h5>
      <input
        class="d-block m-auto my-2"
        v-model="minPrice"
        type="number"
        placeholder="Pretul minim"
      />
      <input
        class="d-block m-auto my-2"
        v-model="maxPrice"
        type="number"
        placeholder="Pretul minim"
      />
      <button @click="searchByPrice" class="search-button mt-2">Search</button>
      <div v-show="showPurchaseByPrice">
        <div
          v-for="(purchase, index) in purchases"
          :key="index"
          class="d-inline-block"
        >
          <PurchaseCard :purchase="purchase" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
import PurchaseForm from "@/views/PurchaseForm";
import PurchaseCategory from "@/components/PurchaseCategory";

export default {
  name: "PurchaseList",
  // eslint-disable-next-line vue/no-unused-components
  components: { PurchaseCategory, PurchaseForm, PurchaseCard },
  data() {
    return {
      showAllPurchases: false,
      minPrice: "",
      maxPrice: "",
      purchases: this.$store.state.purchases,
      showPurchaseByPrice: false,
    };
  },
  // computed: {
  //   purchases() {
  //     return this.$store.state.purchases;
  //   },
  // },
  methods: {
    displayAllPurchases() {
      this.showAllPurchases = !this.showAllPurchases;
    },
    searchByPrice() {
      this.purchases = this.$store.getters.getPurchaseByPrice(
        this.maxPrice,
        this.minPrice
      );
      this.showPurchaseByPrice = true;
    },
  },
};
</script>

<style>
.add-button {
  background: #175dff;
  color: white;
  border-radius: 7px;
  border: none;
  padding: 5px;
  width: 50px;
}

.add-button:hover {
  background: #1235ea;
}

.search-button {
  background: gray;
  color: white;
  border-radius: 7px;
  border: none;
  padding: 5px;
  width: 75px;
}

.search-button:hover {
  background: #5b5b5b;
}
</style>
