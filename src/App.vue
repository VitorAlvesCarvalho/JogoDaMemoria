<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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
