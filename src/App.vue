<template>
  <div class="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/views/HomeView.vue";

export default {
  name: "App",

  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  font-family: "Roboto", sans-serif;
  background-color: #242424;
  width: 100%;
  min-height: 100vh;
  padding: 32px;
}
</style>
