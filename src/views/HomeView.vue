<template>
  <div class="home">
    <h1 class="home__title">Jogo da memória</h1>

    <div class="home__score">
      <span>Tentativas: {{ ATTEMPTS }}</span>
      <span>Taxa de acerto: {{ HITS_PERCENTAGE }} %</span>
    </div>

    <div class="home__list">
      <Card
        v-for="card in CARDS"
        :key="card.id"
        :card="card"
        @flip-card="flipCard"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "HomeView",

  components: {
    Card,
  },

  computed: {
    ...mapGetters(["CARDS", "ATTEMPTS", "HITS_PERCENTAGE"]),
  },

  methods: {
    ...mapActions(["SET_FLIP_CARD"]),

    flipCard(card) {
      this.SET_FLIP_CARD(card);
    },
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
    margin-bottom: 32px;
  }

  &__score {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  &__list {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
