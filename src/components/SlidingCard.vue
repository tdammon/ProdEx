<template>
  <div class="slidingCard">
    <div class="photoHolder">
      <img class="homePageOneImg" :alt="alt" :src="icon" />
    </div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "SlidingCard",
  data() {
    return {};
  },
  props: ["title", "content", "icon", "alt"]
};
</script>

<style scoped>
.slidingCard {
  background-color: #ffffff !important;
  padding: 2.5rem;
  width: 60vw;
  position: relative;
  scroll-snap-align: center;
}
.photoHolder {
  height: 10rem;
  line-height: 10rem;
  border-radius: 90px;
  background-color: #f7f8fc;
  width: 8rem;
  margin: auto;
}
img {
  vertical-align: middle;
  height: 75px;
  width: 75px;
}
h1 {
  font-size: 18px;
  font-weight: bold;
}
p {
  font-size: 1rem;
  white-space: normal !important;
}
</style>
