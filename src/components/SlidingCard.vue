<template>
  <div class="slidingCard">
    <div class="photoHolder"></div>
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
  props: ["title", "content"]
};
</script>

<style scoped>
.slidingCard {
  background-color: #ffffff !important;
  width: 60vw;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  scroll-snap-align: center;
}
.photoHolder {
  height: 10rem;
  border-radius: 90px;
  background-color: #f7f8fc;
  width: 8rem;
  margin: auto;
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