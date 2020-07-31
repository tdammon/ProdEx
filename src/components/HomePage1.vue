<template>
  <div class="main">
    <img class="mainImg" alt="Girl in Mask" src="../assets/facemask.jpg" />
    <h1>Protecting your employees is more important than ever.</h1>
    <p>
      We’re here to make it a little easier with crowd sourced and brand
      verified information.
    </p>
    <button class="mainButton">FIND PPE</button>
  </div>
</template>

<script>
export default {
  name: "HomePage1",
  data() {
    return {};
  }
};
</script>

<style scoped>
.main {
  margin-top: 3.5rem;
  height: 100vh;
}
.mainImg {
  height: auto;
  width: 100%;
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.mainButton {
  border: 2px solid #000000;
  margin: auto;
  width: 90%;
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
}
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1.25rem;
  line-height: 23px;
  color: #000000;
  text-align: left;
}
p {
  line-height: 18px;
  color: #000000;
  text-align: left;
  margin: 1.25rem;
}
</style>