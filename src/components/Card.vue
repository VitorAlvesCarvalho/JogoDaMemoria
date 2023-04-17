<template>
  <button
    @click="clickFlipCard"
    :class="['card', { 'card--found': card.foundPair }]"
    :disabled="disableButton"
  >
    <div class="card__content" :class="{ card__flip: flip }">
      <div class="card__front">
        <img width="80%" :src="require(`@/assets/icons/${card.image}`)" />
      </div>
      <div class="card__back" />
    </div>
  </button>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Card",

  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      flip: true,
    };
  },

  computed: {
    ...mapGetters(["TURNED_CARDS_LIMIT", "IS_PAIR", "TURNED_CARDS"]),

    disableButton() {
      return this.card.flip || this.TURNED_CARDS_LIMIT || this.card.foundPair;
    },
  },

  methods: {
    ...mapMutations(["RESET_TURNED_CARDS", "INCREMENT_ATTEMPTS"]),
    ...mapActions(["SET_FLIP_CARD", "CHECK_PAIR", "MARK_PAIRS"]),

    clickFlipCard() {
      this.toogleFlip();
      this.SET_FLIP_CARD(this.card);

      if (this.TURNED_CARDS_LIMIT) {
        setTimeout(() => {
          this.INCREMENT_ATTEMPTS();
        }, 900);
      }
    },

    toogleFlip() {
      this.flip = !this.flip;
    },

    markPair() {
      this.MARK_PAIRS();
    },

    resetStateCardsFlip() {
      setTimeout(() => {
        this.toogleFlip();
        this.RESET_TURNED_CARDS();
      }, 1000);
    },
  },

  watch: {
    TURNED_CARDS() {
      if (!this.TURNED_CARDS_LIMIT || !this.card.flip) return;

      if (this.IS_PAIR) {
        this.markPair();
      } else {
        this.resetStateCardsFlip();
      }
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 120px;
  aspect-ratio: 3/4;
  perspective: 1500px;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  &--found {
    animation: animation-found 0.5s 0.8s forwards;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.9s;
    transform-style: preserve-3d;
  }

  &__front,
  &__back {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__front {
    background-color: white;
  }

  &__back {
    transform: rotateY(180deg);
    background-image: url("../assets/fundo_carta.jpg");
    background-size: 100%;
    background-position: center;
  }

  &__flip {
    transform: rotateY(180deg);
  }
}

.card:disabled {
  cursor: initial;
}

@keyframes animation-found {
  0% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.1) rotate(3deg);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 0.5;
  }
}
</style>
