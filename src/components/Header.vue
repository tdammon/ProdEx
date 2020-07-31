<template>
  <div class="header">
    <input class="headerInput" v-model="search" />
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: "Search"
    };
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #3c4256;
}
.headerInput {
  margin: auto;
  width: 90%;
  height: 1.5rem;
  border-radius: 4px;
}
</style>