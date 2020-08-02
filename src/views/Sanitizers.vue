<template>
  <div class="home">
    <Header />
    <Sanitizers />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sanitizers from "@/components/SanitizersPage1.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SanitizersPage",
  components: {
    Header,
    Sanitizers,
    Footer
  }
};
</script>

<style scoped>
</style>