<template>
  <button @click="clickFlipCard" class="card" :disabled="disableButton">
    <div class="card__content" :class="{ card__flip: flip }">
      <div class="card__front">
        <img width="80%" :src="require(`@/assets/icons/${card.image}`)" />
      </div>
      <div class="card__back"></div>
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

    turndedCards: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  data() {
    return {
      flip: true,
    };
  },

  computed: {
    ...mapGetters(["TURNED_CARDS_LIMIT", "IS_PAIR"]),

    disableButton() {
      return this.card.flip || this.TURNED_CARDS_LIMIT || this.card.foundPair;
    },
  },

  methods: {
    ...mapMutations(["RESET_TURNED_CARDS"]),
    ...mapActions(["SET_FLIP_CARD", "CHECK_PAIR", "MARK_PAIRS"]),

    clickFlipCard() {
      this.SET_FLIP_CARD(this.card);
      this.toogleFlip();
    },

    toogleFlip() {
      this.flip = !this.flip;
    },
  },

  watch: {
    turndedCards() {
      if (this.TURNED_CARDS_LIMIT && this.card.flip) {
        if (this.IS_PAIR) {
          this.MARK_PAIRS();
        } else {
          setTimeout(() => {
            this.toogleFlip();
            this.RESET_TURNED_CARDS();
          }, 1000);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 100%;
  aspect-ratio: 3/4;
  perspective: 1500px;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;

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
    background-color: gray;
  }

  &__flip {
    transform: rotateY(180deg);
  }
}
</style>
