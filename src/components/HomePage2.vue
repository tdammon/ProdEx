<template>
  <div class="homePageTwo">
    <h1>Who We Serve</h1>
    <p>Explore what we can do for you.</p>
    <div class="cardHolder">
      <div class="cardSpace" v-for="card in cards" :key="card.index">
        <SlidingCard
          :title="card.title"
          :content="card.content"
          :icon="card.icon"
        />
      </div>
    </div>
    <button class="loadButton">Load More...</button>
  </div>
</template>

<script>
import SlidingCard from "./SlidingCard.vue";
import doctorIcon from "@/assets/doctorIcon.png";
import classroomIcon from "@/assets/classroomIcon.png";
import turkeyIcon from "@/assets/turkeyIcon.png";
import buildingIcon from "@/assets/buildingIcon.png";

export default {
  name: "HomePage2",
  components: {
    SlidingCard
  },
  data() {
    return {
      cards: [
        {
          title: "Food Services",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          alt: "turkey",
          icon: turkeyIcon
        },
        {
          title: "Assisted Living",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          alt: "doctor",
          icon: doctorIcon
        },
        {
          title: "Retail",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          alt: "store",
          icon: buildingIcon
        },
        {
          title: "Education",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          alt: "teacher",
          icon: classroomIcon
        }
      ]
    };
  }
};
</script>

<style scoped>
.homePageTwo {
  /* min-height: 100vh; */
  background-color: #f7f8fc;
  padding-top: 2rem;
}
.cardHolder {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: mandatory;
  scroll-snap-type: x mandatory;
}
.cardHolder > :last-child {
  padding-right: 20%;
}
.cardHolder > :first-child {
  padding-left: 20%;
}
.cardSpace {
  padding: 0.5rem;
  background-color: #f7f8fc;
}
.loadButton {
  background-color: #10182f;
  border-radius: 4px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
  padding: 1rem 3.25rem 1rem 3.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1.25rem;
  line-height: 23px;
  color: #000000;
}
p {
  line-height: 18px;
  color: #000000;
  margin: 1.25rem;
}
</style>
