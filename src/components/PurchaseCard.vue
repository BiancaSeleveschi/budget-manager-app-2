<template>
  <div>
    <div
      class="m-3 p-2 d-inline-block rounded-2 border border-2"
      :class="{
        'bg-warning': purchase.category === 'Haine',
        'bg-secondary': purchase.category === 'Mancare',
        'bg-success': purchase.category === 'Distractie',
        'bg-primary': purchase.category === 'Utilitati',
        'bg-info': purchase.category === 'Altele',
      }"
    >
      <h3>Name: {{ purchase.name }}</h3>
      <p>Price: {{ purchase.price }}</p>
      <p>Category: {{ purchase.category }}</p>
      <button @click="deletePurchase" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>
<script>
// la crearea unei categoryy noi sa se aleaga si culoarea
// (folosind un color picker) si se salveaza ca un atributa aditional pt catory
//se fafsieaza culoarea specifica cateforiei folosind v-bind:style="background: $color}"
export default {
  name: "PurchaseCard",
  props: ["purchase"],
  methods: {
    deletePurchase() {
      this.$store.dispatch("deletePurchase", this.purchase.name);
    },
  },
};
</script>

<style scoped></style>
