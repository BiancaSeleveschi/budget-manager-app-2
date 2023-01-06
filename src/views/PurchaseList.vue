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
      <ItemCard :purchases="purchases" />
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
        <ItemCard :purchases="purchases" />
      </div>
    </div>
    <div>
      <h4 class="mt-5 mb-3">Sortarea categoriilor dupa:</h4>
      <button @click="sortByPrice" class="btn btn-outline-success">Pret</button>
      <ItemCard :purchases="purchasesByPrice" />
    </div>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
import PurchaseForm from "@/views/PurchaseForm";
import PurchaseCategory from "@/components/PurchaseCategory";
import ItemCard from "@/components/ItemCard";

export default {
  name: "PurchaseList",
  // eslint-disable-next-line vue/no-unused-components
  components: { ItemCard, PurchaseCategory, PurchaseForm, PurchaseCard },
  data() {
    return {
      showAllPurchases: false,
      minPrice: "",
      maxPrice: "",
      purchases: this.$store.state.purchases,
      showPurchaseByPrice: false,
      purchasesByPrice: "",
    };
  },
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
    sortByPrice() {
      this.purchasesByPrice = this.$store.getters.getCategoryByPrice;
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
