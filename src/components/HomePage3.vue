<template>
  <div class="homePageThree">
    <div class="homePageThreeNavigation">
      <router-link to="/">Masks</router-link> |
      <router-link to="/">Sanatizer</router-link> |
      <router-link to="/">Disinfectant</router-link> |
      <router-link to="/">Other</router-link>
    </div>
    <div>
      <img
        class="homePageThreeImg"
        alt="Guy in Mask"
        src="../assets/facemaskguy.jpg"
      />
    </div>
    <p>
      Every day is taco ipsum tuesday. Let’s do a beef and a chicken, and one
      with both. How do you feel about hard shelled tacos? Add in a few el
      Pastor with guac and diced onions.
    </p>
    <button class="homePageThreeButton">Find Now -></button>
  </div>
</template>

<script>
export default {
  name: "HomePage3",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.homePageThree {
  height: 80vh;
}
.homePageThreeNavigation {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.homePageThreeNavigation a {
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
  text-decoration: none;
}
.homePageThreeImg {
  height: auto;
  width: 100%;
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.homePageThreeButton {
  border: none;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  margin-left: 1.25rem;
  padding: 0;
}
p {
  font-size: 1rem;
  font-weight: normal;
  color: #10182f;
  margin: 1.25rem;
  text-align: left;
}
</style>