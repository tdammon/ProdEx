<template>
  <div class="home">
    <Header />
    <N95 />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import N95 from "@/components/N95Page1.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Find PPE",
  components: {
    Header,
    N95,
    Footer
  }
};
</script>

<style scoped>
</style>