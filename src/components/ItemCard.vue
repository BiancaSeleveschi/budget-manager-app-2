<template>
  <div>
    <div
      class="d-inline-block"
      v-for="(purchase, index) in purchases"
      :key="index"
    >
      <PurchaseCard :purchase="purchase" />
    </div>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";

export default {
  name: "ItemCard",
  components: { PurchaseCard },
  props: ["purchases"],
};
</script>

<style scoped></style>
