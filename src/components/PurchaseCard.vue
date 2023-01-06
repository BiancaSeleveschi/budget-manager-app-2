<template>
  <div>
    <div
      class="m-3 p-2 rounded-2 border border-2"
      :class="{
        'bg-warning': purchase.category === 'Haine',
        'bg-danger': purchase.category === 'Mancare',
        'bg-success': purchase.category === 'Distractie',
        'bg-primary': purchase.category === 'Utilitati',
        'bg-secondary': purchase.category === 'Altele',
      }"
    >
      <h3>Name: {{ purchase.name }}</h3>
      <p>Price: {{ purchase.price }}</p>
      <p>Category: {{ purchase.category }}</p>
    </div>
  </div>
</template>
<script>
// la crearea unei categoryy noi sa se aleaga si culoarea
// (folosind un color picker) si se salveaza ca un atributa aditional pt catory
//se fafsieaza culoarea specifica cateforiei folosind v-bind:style="background: $color}"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PurchaseCard",
  props: ["purchase"],
};
</script>

<style scoped></style>
