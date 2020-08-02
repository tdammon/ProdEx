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
      <router-link to="/FindPPE/N95">Masks</router-link> |
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
    <div class="footnote">
      <router-link to="/">Terms of Service</router-link><br />
      <router-link to="/">Privacy Policy</router-link><br />
      <router-link to="/">Sitemap</router-link>
    </div>
    <div class="horizontalLine"></div>
    <div class="socialMediaLogos"></div>
    <div class="copyRight">&copy; 2020 PPE Finder by ProdEx</div>
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
  width: 100vw;
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: #10182f;
  z-index: 999;
  text-align: left;
}
.logoHolder {
  color: rgba(249, 250, 255, 0.4);
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.footerNavigation {
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.footerNavigation a {
  font-size: 1rem;
  line-height: 40px;
  font-weight: normal;
  text-decoration: none;
  color: #ffffff;
}
.footnote {
  font-size: 1rem;
  line-height: 40px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.footnote a {
  font-size: 1rem;
  line-height: 40px;
  font-weight: normal;
  text-decoration: none;
  color: rgba(249, 250, 255, 0.4);
}
.horizontalLine {
  width: 90%;
  border: 1px solid #ffffff;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.copyRight {
  color: #ffffff;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
}
h1 {
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: #ffffff;
}
</style>