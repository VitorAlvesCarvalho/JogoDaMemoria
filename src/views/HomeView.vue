<template>
  <div>
    <div class="home">
      <h1 class="home__title">Jogo da memória</h1>

      <div class="home__score">
        <span>Tentativas: {{ ATTEMPTS }}</span>
        <span>Taxa de acerto: {{ HITS_PERCENTAGE }}%</span>
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

    <ModalFinishGame v-if="isOpenModalFinishGame" @new-game="newGame" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "@/components/Card.vue";
import ModalFinishGame from "@/components/ModalFinishGame.vue";

export default {
  name: "HomeView",

  components: {
    Card,
    ModalFinishGame,
  },

  data() {
    return {
      isOpenModalFinishGame: false,
    };
  },

  computed: {
    ...mapGetters([
      "CARDS",
      "ATTEMPTS",
      "HITS_PERCENTAGE",
      "FINISH_GAME",
      "IS_PAIR",
      "TURNED_CARDS_LIMIT",
    ]),
  },

  methods: {
    ...mapActions([
      "SET_FLIP_CARD",
      "MARK_PAIRS",
      "RESET_TURNED_CARDS",
      "RESET_GAME",
    ]),

    flipCard(card) {
      this.SET_FLIP_CARD(card);

      this.checkPair(card);
    },

    checkPair() {
      if (!this.TURNED_CARDS_LIMIT) return;

      if (this.IS_PAIR) {
        this.MARK_PAIRS();
      } else {
        setTimeout(() => {
          this.RESET_TURNED_CARDS();
        }, 1000);
      }
    },

    newGame() {
      this.RESET_GAME();
      this.isOpenModalFinishGame = false;
    },
  },

  watch: {
    FINISH_GAME(value) {
      if (!value) return;

      setTimeout(() => {
        this.isOpenModalFinishGame = true;
      }, 1500);
    },
  },
};
</script>

<style lang="scss">
.home {
  width: fit-content;
  margin: auto;
  text-align: center;
  color: white;

  &__title {
    font-size: 48px;
    margin-bottom: 32px;
  }

  &__score {
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 32px;
  }

  &__list {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(1, 1fr);

    justify-items: center;
  }

  @media (min-width: 320px) {
    &__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 460px) {
    &__list {
      grid-template-columns: repeat(3, 1fr);
    }

    &__score {
      flex-direction: row;
    }
  }

  @media (min-width: 620px) {
    &__list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
