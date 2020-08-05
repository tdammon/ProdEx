<template>
  <div class="equiptmentCard">
    <img class="equiptmentImage" :src="icon" />
    <div class="cardText">
      <div class="cardTitle">{{ title }}</div>
      <div @click="navTo" class="findNow">Find Now -></div>
      <div class="about">About this Category</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EquiptmentCard",
  data() {
    return {
      urlRoute: this.title
    };
  },
  methods: {
    navTo() {
      this.$router.push(`/category/${this.urlRoute.toLowerCase()}`);
    }
  },
  props: ["title", "content", "icon"]
};
</script>

<style scoped>
.equiptmentCard {
  display: flex;
  background-color: #ffffff;
  width: 85%;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
}
.equiptmentImage {
  height: 5rem;
  width: 5rem;
  border: 1px solid black;
}
.cardText {
  margin-left: 1rem;
}
.cardTitle {
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: #3c4257;
  text-align: left;
  margin-bottom: 0.5rem;
}
.findNow {
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2rem;
  color: #3c4257;
  text-align: left;
  margin-bottom: 0.5rem;
}
.about {
  font-size: 1rem;
  line-height: 1.2rem;
  color: #3c4257;
  text-align: left;
  margin-bottom: 0.5rem;
}
</style>
