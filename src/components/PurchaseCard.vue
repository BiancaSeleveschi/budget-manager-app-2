<template>
  <div>
    <div v-if="purchase.category === 'Haine'">
      <div class="bg-warning m-3 p-2 rounded-2 border border-2">
        <h3>Name: {{ purchase.name }}</h3>
        <p>Price: {{ purchase.price }}</p>
        <p>Category: {{ purchase.category }}</p>
      </div>
    </div>
    <div v-if="purchase.category === 'Mancare'">
      <div class="bg-danger m-3 p-2 rounded-2 border border-2">
        <h3>Name: {{ purchase.name }}</h3>
        <p>Price: {{ purchase.price }}</p>
        <p>Category: {{ purchase.category }}</p>
      </div>
    </div>
    <div v-if="purchase.category === 'Distractie'">
      <div class="bg-success m-3 p-2 rounded-2 border border-2">
        <h3>Name: {{ purchase.name }}</h3>
        <p>Price: {{ purchase.price }}</p>
        <p>Category: {{ purchase.category }}</p>
      </div>
    </div>
    <div v-if="purchase.category === 'Utilitati'">
      <div class="bg-primary m-3 p-2 rounded-2 border border-2">
        <h3>Name: {{ purchase.name }}</h3>
        <p>Price: {{ purchase.price }}</p>
        <p>Category: {{ purchase.category }}</p>
      </div>
    </div>
    <div v-if="purchase.category === 'Altele'">
      <div class="bg-secondary m-3 p-2 rounded-2 border border-2">
        <h3>Name: {{ purchase.name }}</h3>
        <p>Price: {{ purchase.price }}</p>
        <p>Category: {{ purchase.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PurchaseCard",
  props: ["purchase"],
};
</script>

<style scoped></style>
