<template>
  <div class="home">
    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "HomeView",

  components: {
    Card,
  },
};
</script>

<style>
.home {
  margin: auto;
  max-width: 50%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
