<template>
  <div class="home">
    <h1 class="home__title">Jogo da memória</h1>

    <div class="home__list">
      <Card v-for="card in CARDS" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "HomeView",

  components: {
    Card,
  },

  computed: {
    ...mapGetters(["CARDS"]),
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
