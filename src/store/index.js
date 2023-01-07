import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    purchases: [
      {
        name: "Rochie",
        price: 550,
        category: "Haine",
      },
      {
        name: "Cereale",
        price: 9,
        category: "Mancare",
      },
      {
        name: "Concert",
        price: 270,
        category: "Distractie",
      },
      {
        name: "Festival de muzica",
        price: 190,
        category: "Distractie",
      },
      {
        name: "City-Break",
        price: 2300,
        category: "Altele",
      },
      {
        name: "Gaz",
        price: 460,
        category: "Utilitati",
      },
      {
        name: "Camasa",
        price: 90,
        category: "Haine",
      },
      {
        name: "Curent",
        price: 48,
        category: "Utilitati",
      },
      {
        name: "Pizza",
        price: 30,
        category: "Mancare",
      },
    ],
    categories: ["Mancare", "Distractie", "Haine", "Utilitati", "Altele"],
  },
  getters: {
    getCategoryWithMaxPrice: (state) => {
      let maxPrice = Number.MIN_SAFE_INTEGER;
      let category;
      for (let i = 0; i < state.purchases.length; i++) {
        if (state.purchases[i].price > maxPrice) {
          maxPrice = state.purchases[i].price;
          category = state.purchases[i].category;
        }
      }
      return category;
    },
    getCategoryWithMinPrice: (state) => {
      let minPrice = Number.MAX_SAFE_INTEGER;
      let category;
      for (let i = 0; i < state.purchases.length; i++) {
        if (state.purchases[i].price < minPrice) {
          minPrice = state.purchases[i].price;
          category = state.purchases[i].category;
        }
      }
      return category;
    },
    getCategoryWithMaxPrice23: (state) => {
      let minPrice = Number.MAX_SAFE_INTEGER;
      let category;
      for (let i = 0; i < state.purchases.length; i++) {
        if (state.purchases[i].price < minPrice) {
          minPrice = state.purchases[i].price;
          category = state.purchases[i];
        }
      }
      return category;
    },
    getPurchasesByCategory: (state) => (category) => {
      return state.purchases.filter((p) => p.category === category);
    },
    getPurchasesCategory: (state) => (category) => {
      return state.categories.push(category);
    },
    getPurchaseByPrice: (state) => (maxPrice, minPrice) => {
      return state.purchases.filter(
        (p) => p.price < maxPrice && p.price > minPrice
      );
    },
    getCategoryByPrice: (state) => {
      return state.purchases.sort(function (a, b) {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    },
    getPurchaseInCategoriesByPrice: (state) => (category) => {
      return state.purchases

        .sort(function (a, b) {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        })
        .filter((p) => p.category === category);
    },
  },
  mutations: {
    ADD_PURCHASE(state, purchase) {
      state.purchases.push(purchase);
    },
    DELETE_PURCHASE(state, name) {
      let index = state.purchases.findIndex((p) => p.name === name);
      state.purchases.splice(index, 1);
    },
  },
  actions: {
    addPurchase(context, purchase) {
      context.commit("ADD_PURCHASE", purchase);
    },
    deletePurchase(context, name) {
      context.commit("DELETE_PURCHASE", name);
    },
  },
  modules: {},
});
