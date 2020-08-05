<template>
  <div class="masksPage1">
    <div class="breadcrumb">
      <a @click="returnHome">Home</a> / <a @click="navToPPE">Find PPE</a> /
      Masks
    </div>
    <h1>Masks</h1>
    <p>
      Loose-fitting device that creates a physical barrier between the mount and
      nose and potential contaminants. The edges of masks are not designed to
      form a seal.
    </p>
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
    <button class="loadMoreButton">Load More...</button>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "MasksPage1",
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
        },
        {
          title: "Product Name",
          model: "Model Number",
          brand: "3M",
          quantity: 10000,
          location: 98102
        },
        {
          title: "Product Name",
          model: "Model Number",
          brand: "3M",
          quantity: 10000,
          location: 98102
        },
        {
          title: "Product Name",
          model: "Model Number",
          brand: "3M",
          quantity: 10000,
          location: 98102
        },
        {
          title: "Product Name",
          model: "Model Number",
          brand: "3M",
          quantity: 10000,
          location: 98102
        }
      ]
    };
  },
  methods: {
    returnHome() {
      this.$router.push("/");
    },
    navToPPE() {
      this.$router.push("/category");
    }
  }
};
</script>

<style scoped>
.masksPage1 {
  margin-top: 3.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
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
.breadcrumb a {
  color: #0000ee;
}
.buttonHolder {
  display: flex;
  justify-content: space-around;
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
.loadMoreButton {
  background-color: #10182f;
  color: #ffffff;
  padding: 1rem 3rem 1rem 3rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 2rem;
}
h1 {
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: #405169;
  text-align: left;
  margin-left: 1.5rem;
}
p {
  text-align: left;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
</style>
