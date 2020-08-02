<template>
  <div class="productCard">
    <img class="productImage" />
    <div class="cardText">
      <div className="cardTitleHeader">
        <div>
          <div class="sellingFast">Selling Fast</div>
          <div class="cardTitle">{{ title }}</div>
          <div class="modelNumber">{{ model }}</div>
        </div>
      </div>
      <div class="cardCategories">
        <div class="categoryPair">
          <div class="productCardCategory">Brand</div>
          <div class="brand">{{ brand }}</div>
        </div>
        <div class="categoryPair">
          <div class="productCardCategory">Quantity</div>
          <div class="quantity">{{ quantity }}</div>
        </div>
        <div class="categoryPair">
          <div class="productCardCategory">Location</div>
          <div class="location">{{ location }}</div>
        </div>
      </div>
      <div class="buyNow">Buy on Amazon -></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {};
  },
  props: ["title", "model", "brand", "quantity", "location"]
};
</script>

<style scoped>
.productCard {
  display: flex;
  background-color: #ffffff;
  width: 85%;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
}
.productImage {
  height: 2rem;
  width: 2rem;
  border-radius: 90px;
  border: 1px solid red;
}
.cardText {
  margin-left: 1rem;
  margin-right: 1rem;
  width: 100%;
}
.cardTitleHeader {
}
.cardTitle {
  font-size: 0.85rem;
  line-height: 1rem;
  font-weight: bold;
  color: #1a1a1a;
  text-align: left;
  margin-bottom: 0rem;
}
.modelNumber {
  font-size: 0.75rem;
  text-align: left;
  color: #b3b3b3;
}
.sellingFast {
  float: right;
  font-size: 0.75rem;
  color: #19a784;
}
.productCardCategory {
  font-size: 0.75rem;
  color: #b3b3b3;
}
.cardCategories {
  display: flex;
  margin-top: 1rem;
}
.categoryPair {
  margin-right: 1.5rem;
}
.buyNow {
  margin-top: 1rem;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
}
.brand {
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}
.quantity {
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}
.location {
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}
</style>
