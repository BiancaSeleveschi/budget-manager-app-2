<template>
  <div>
    <button @click="showHCategory" class="rounded-1 btn btn-warning mx-2">
      Haine
    </button>
    <button @click="showMCategory" class="rounded-1 btn btn-danger mx-2">
      Mancare
    </button>
    <button @click="showDCategory" class="rounded-1 btn btn-success mx-2">
      Distractie
    </button>
    <button @click="showUCategory" class="rounded-1 btn btn-primary mx-2">
      Utilitati
    </button>
    <button @click="showACategory" class="rounded-1 btn btn-secondary mx-2">
      Altele
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonCategories",
  methods: {
    showHCategory() {
      this.$emit("show-H-category");
    },
    showMCategory() {
      this.$emit("show-M-category");
    },
    showDCategory() {
      this.$emit("show-D-category");
    },
    showUCategory() {
      this.$emit("show-U-category");
    },
    showACategory() {
      this.$emit("show-A-category");
    },
  },
};
</script>

<style scoped></style>
