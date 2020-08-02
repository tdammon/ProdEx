<template>
  <div class="home">
    <Header />
    <Masks />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Masks from "@/components/MasksPage1.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "MasksPage",
  components: {
    Header,
    Masks,
    Footer
  }
};
</script>

<style scoped>
</style>