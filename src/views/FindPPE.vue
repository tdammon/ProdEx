<template>
  <div class="home">
    <Header />
    <FindPPEPage1 />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FindPPEPage1 from "@/components/FindPPEPage1.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "FindPPE",
  components: {
    Header,
    FindPPEPage1,
    Footer
  }
};
</script>
