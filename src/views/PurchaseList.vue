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
        <ItemCard :purchases="purchasesSorted" />
      </div>
    </div>
    <PurchaseSortedByPrice />
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
import PurchaseCategory from "@/components/PurchaseCategory";
import ItemCard from "@/components/ItemCard";
import PurchaseSortedByPrice from "@/components/PurchaseSortedByPrice";
//TODO: Imbunatatiri:
//1. Purchesese sorted
// nu pui lista de cheltuieli sortate in state, ai nevoie doar in componenta
//ai un getter pt a lua cheltuielile sortate si apelezi aici
//creezi o componenta pentru a afisa o lista de cheltuili: PurchaseList
//TINE MINTE: componentele se creaza pentru a reuztiliza codul HTML
//redenumesti view-ul in Purcheses
//folosesti componenta pentru a afosa purchse-urile originale di data (luate din store)
//si purchesuriole sortate (poti sa le tii in computed, data sau directe asignezi apelul de getter la trimiterea prop la utilizarea componentei
//2. Eliminare view-uri si componente prea specifice/particulare
//View-utile sunt pagina html care vrem sa le afisam separat ca o pagina intreaga si le folosim daca avemmai mutle chestii in ea nu doar un titlu/categorie
//Componentele trebuie sa fie generale ca sa poata fi reutilizate nu specifice precum: PurchasesSorted
//mai degraba o componenta purchaseList care e folosita sa afizesi zi purchaseurile sortate si cele nesortate si tot asa
// 3. Eliminare date dinm state care nu sunt folosite de alte componente. Tot timpiul accesul cat mai restrictiv doar pt ce e nevoie:
//De ex: lista de cheltuili sortate e tinuta doar in componenta pentru ca nu este mevoeid e ea in alta parte
//ATENTIE: ai grija cand modifici o data din state pentru ca seflecta in toata aplicatia , de ex: pruchases din state, iar daca faci o modificar
//celelalte componente care folosesc acea data, purchses, osa primeasca purchasee-ul modificat
//4. Denumirile si reutilizarea codului sunt FOARTE IMPORTANTE
// Componenta ItemCard induce in eroare pentru ca nu afiseaza un card cu itemul
//ea afiseaza o lista de purchases => redenumire: PurchaseList
//Daca mai este cod oricunde in applicatie care afiseaza o lista de purchase-uri, inlocuieste-l cu componenta PurchaseList

export default {
  name: "PurchaseList",
  // eslint-disable-next-line vue/no-unused-components
  components: {
    PurchaseSortedByPrice,
    ItemCard,
    PurchaseCategory,
    PurchaseCard,
  },
  data() {
    return {
      showAllPurchases: false,
      minPrice: "",
      maxPrice: "",
      purchases: this.$store.state.purchases,
      showPurchaseByPrice: false,
      purchasessearchByPrice: [],
      purchasesSorted: [],
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
      this.showPurchaseByPrice = !this.showPurchaseByPrice;
      this.purchasesSorted = this.$store.getters.getPurchaseByPrice(
        this.maxPrice,
        this.minPrice
      );
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
