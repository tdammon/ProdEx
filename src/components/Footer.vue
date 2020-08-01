<template>
  <div class="footer">
    <div class="logoHolder">Logo</div>
    <div class="footerNavigation">
      <h1>NAVIGATION</h1>
      <router-link to="/">About</router-link> |
      <router-link to="/">Contact</router-link> |
      <router-link to="/">FAQ</router-link> |
      <router-link to="/">Blog</router-link>
    </div>
    <div class="footerNavigation">
      <h1>CATEGORIES</h1>
      <router-link to="/">Masks</router-link> |
      <router-link to="/">Sanatizers</router-link> |
      <router-link to="/">Disinfectants</router-link> |
      <router-link to="/">Other</router-link>
    </div>
    <div class="footerNavigation">
      <h1>ACCOUNT</h1>
      <router-link to="/">Sign Up</router-link> |
      <router-link to="/">Disributor Login</router-link> |
      <router-link to="/">Brand Login</router-link> |
      <router-link to="/">Report Issue</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style scoped>
.footer {
  left: 0;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #10182f;
  z-index: 999;
}
.footerNavigation {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.footerNavigation a {
  font-size: 1rem;
  line-height: 40px;
  font-weight: normal;
  text-decoration: none;
  color: #ffffff;
}
h1 {
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: #ffffff;
}
</style>