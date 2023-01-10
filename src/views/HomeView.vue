<template>
  <div class="home">
    <h1 class="home__title">Jogo da memória</h1>

    <div class="home__list">
      <Card v-for="item in 12" :key="item" />
    </div>
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

<style lang="scss">
.home {
  margin: auto;
  max-width: 40%;
  text-align: center;
  color: white;

  &__title {
    margin-bottom: 64px;
  }

  &__list {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
