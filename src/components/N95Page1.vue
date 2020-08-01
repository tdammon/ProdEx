<template>
  <div class="n95Page1">
    <div class="breadcrumb">Home / Find PPE / N95</div>
    <h1>N95 Respirator</h1>
    <div class="buttonHolder">
      <button class="filterButton">FILTER</button>
      <button class="sortButton">SORT</button>
    </div>
    <div class="card" v-for="card in productCards" :key="card.index">
      <ProductCard
        :title="card.title"
        :model="card.model"
        :brand="card.brand"
        :quantity="card.quantity"
        :location="card.location"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "FindPPE1",
  components: {
    ProductCard
  },
  data() {
    return {
      productCards: [
        {
          title: "Product Name",
          model: "Model Number",
          brand: "3M",
          quantity: 10000,
          location: 98102
        }
      ]
    };
  }
};
</script>

<style scoped>
.n95Page1 {
  min-height: 100vh;
  margin-top: 3.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  background-color: #f7f8fc;
}
.breadcrumb {
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: bold;
  color: #405169;
  text-align: left;
  margin-left: 1.5rem;
}
.buttonHolder {
  display: flex;
  justify-content: space-between;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.filterButton {
  border: 1px solid black;
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  color: #10182f;
  background-color: #ffffff;
}
.sortButton {
  border: 1px solid black;
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  color: #10182f;
  background-color: #ffffff;
}
h1 {
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: #405169;
  text-align: left;
  margin-left: 1.5rem;
}
</style>