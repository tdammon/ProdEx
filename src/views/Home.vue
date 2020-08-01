<template>
  <div class="home">
    <Header />
    <HomePage1 />
    <HomePage2 />
    <HomePage3 />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HomePage1 from "@/components/HomePage1.vue";
import HomePage2 from "@/components/HomePage2.vue";
import HomePage3 from "@/components/HomePage3.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    HomePage1,
    HomePage2,
    HomePage3,
    Footer
  }
};
</script>

<style scoped>
</style>