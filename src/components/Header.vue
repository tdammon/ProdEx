<template>
  <div class="header">
    <input class="headerInput" v-model="search" placeholder="Search" />
    <img
      class="hamburgerMenu"
      alt="Hamburger Menu"
      src="../assets/hamburgerMenu.png"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #3c4256;
  z-index: 999;
}
.headerInput {
  width: 80%;
  height: 1.5rem;
  border-radius: 4px;
}
.hamburgerMenu {
  margin-left: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  align-self: center;
}
</style>
