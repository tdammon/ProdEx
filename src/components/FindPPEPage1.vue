<template>
  <div class="findPPEOne">
    <div class="breadcrumb"><a @click="returnHome">Home</a> / Find PPE</div>
    <h1>Personal Protective Equiptment</h1>
    <div class="buttonHolder">
      <button class="filterButton">FILTER</button>
      <button class="sortButton">SORT</button>
    </div>
    <div class="card" v-for="card in cards" :key="card.index">
      <EquiptmentCard :title="card.title" :icon="card.icon" />
    </div>
  </div>
</template>

<script>
import EquiptmentCard from "./EquiptmentCard.vue";
import mask from "@/assets/mask.jpg";
import n95 from "@/assets/n95.jpg";
import disinfectant from "@/assets/disinfectant.jpg";
import sanitizer from "@/assets/sanitizer.jpg";

export default {
  name: "FindPPE1",
  components: {
    EquiptmentCard
  },
  data() {
    return {
      cards: [
        {
          title: "Masks",
          alt: "mask",
          icon: mask
        },
        {
          title: "N95",
          alt: "n95 mask",
          icon: n95
        },
        {
          title: "Disinfectants",
          alt: "disinfectant",
          icon: disinfectant
        },
        {
          title: "Sanitizers",
          alt: "sanitizer",
          icon: sanitizer
        },
        {
          title: "Other?"
        }
      ]
    };
  },
  methods: {
    returnHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.findPPEOne {
  margin-top: 3.5rem;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
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
h1 {
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: bold;
  color: #405169;
  text-align: left;
  margin-left: 1.5rem;
}
</style>
