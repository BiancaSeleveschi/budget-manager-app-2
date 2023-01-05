<template>
  <div>
    <input
      v-model="purchase.name"
      class="d-block m-auto mb-2"
      type="text"
      placeholder="Nume"
    />
    <input
      v-model="purchase.price"
      class="d-block m-auto"
      type="number"
      placeholder="Pret"
    />
    <select class="d-block m-auto p-1 my-2" v-model="purchase.category">
      <option
        v-for="(category, index) in this.$store.state.categories"
        :key="index"
      >
        {{ category }}
      </option>
    </select>
    <button @click="addPurchase" class="btn btn-primary my-3 rounded-1">
      Add
    </button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PurchaseForm",
  data() {
    return {
      purchase: {
        name: "",
        price: "",
        category: this.$store.state.categories[0],
      },
    };
  },
  methods: {
    addPurchase() {
      console.log(this.purchase);
      console.log(this.purchase.category);
      console.log(this.purchase.category === "Mancare");
      this.$store.dispatch("addPurchase", this.purchase);
      console.log(this.purchase);
      this.purchase = {
        name: "",
        price: "",
        category: "",
      };
    },
  },
};
</script>

<style scoped></style>
