import Vue from "vue";
import VueRouter from "vue-router";
import PurchaseList from "@/views/PurchaseList";
import PurchaseForm from "@/views/PurchaseForm";
import CategoryForm from "@/views/CategoryForm";
import ExpensiveCategory from "@/views/ExpensiveCategory";
import CheapestCategory from "@/views/CheapestCategory";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "purchase-list",
    component: PurchaseList,
  },
  {
    path: "/add/purchase",
    name: "purchase-form",
    component: PurchaseForm,
  },
  {
    path: "/add/category",
    name: "category-form",
    component: CategoryForm,
  },
  {
    path: "/show/category/expensive",
    name: "expensive-category",
    component: ExpensiveCategory,
  },
  {
    path: "/show/category/cheapest",
    name: "cheapest-category",
    component: CheapestCategory,
  },
  // {
  //   path: "/purchase/:id",
  //   name: "purchase-show",
  //   component: Purchase,
  //   props: true,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
