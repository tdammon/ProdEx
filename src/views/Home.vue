<template>
  <div class="home">
    <Header />
    <HomePage1 />
    <HomePage2 />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HomePage1 from "@/components/HomePage1.vue";
import HomePage2 from "@/components/HomePage2.vue";

export default {
  name: "Home",
  components: {
    Header,
    HomePage1,
    HomePage2
  }
};
</script>

<style scoped>
</style>