<template>
  <div>
    <h4>Cheltuielile pe categorii</h4>
    <div>
      <ButtonCategories
        @show-A-category="showACategory"
        @show-H-category="showHCategory"
        @show-M-category="showMCategory"
        @show-D-category="showDCategory"
        @show-U-category="showUCategory"
      />
    </div>
    <div v-show="showH">
      <div
        class="d-inline-block"
        v-for="(purchase, index) in purchases"
        :key="index"
      >
        <div v-show="purchase.category === catehory1">
          <PurchaseCard :purchase="purchase" />
        </div>
      </div>
    </div>
    <div v-show="showM">
      <div
        class="d-inline-block"
        v-for="(purchase, index) in purchases"
        :key="index"
      >
        <div v-show="purchase.category === catehory2">
          <PurchaseCard :purchase="purchase" />
        </div>
      </div>
    </div>
    <div v-show="showD">
      <div
        class="d-inline-block"
        v-for="(purchase, index) in purchases"
        :key="index"
      >
        <div v-show="purchase.category === catehory3">
          <PurchaseCard :purchase="purchase" />
        </div>
      </div>
    </div>
    <div v-show="showU">
      <div
        class="d-inline-block"
        v-for="(purchase, index) in purchases"
        :key="index"
      >
        <div v-show="purchase.category === catehory4">
          <PurchaseCard :purchase="purchase" />
        </div>
      </div>
    </div>
    <div v-show="showA">
      <div
        class="d-inline-block"
        v-for="(purchase, index) in purchases"
        :key="index"
      >
        <div v-show="purchase.category === catehory5">
          <PurchaseCard :purchase="purchase" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseCard from "@/components/PurchaseCard";
import ButtonCategories from "@/components/ButtonCategories";

export default {
  name: "PurchaseCategory",
  components: { ButtonCategories, PurchaseCard },
  data() {
    return {
      purchases: this.$store.state.purchases,
      showH: false,
      showM: false,
      showD: false,
      showU: false,
      showA: false,
      catehory1: "Haine",
      catehory2: "Mancare",
      catehory3: "Distractie",
      catehory4: "Utilitati",
      catehory5: "Altele",
    };
  },
  methods: {
    showHCategory() {
      this.showH = !this.showH;
      this.showD = false;
      this.showM = false;
      this.showU = false;
      this.showA = false;
    },
    showMCategory() {
      this.showM = !this.showM;
      this.showD = false;
      this.showH = false;
      this.showU = false;
      this.showA = false;
    },
    showDCategory() {
      this.showD = !this.showD;
      this.showH = false;
      this.showM = false;
      this.showU = false;
      this.showA = false;
    },
    showUCategory() {
      this.showU = !this.showU;
      this.showD = false;
      this.showM = false;
      this.showH = false;
      this.showA = false;
    },
    showACategory() {
      this.showA = !this.showA;
      this.showD = false;
      this.showM = false;
      this.showU = false;
      this.showH = false;
    },
  },
};
</script>

<style scoped></style>
