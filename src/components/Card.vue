<template>
  <button
    @click="clickFlipCard"
    :class="['card', { 'card--found': card.foundPair }]"
    :disabled="disableButton"
  >
    <div class="card__content" :class="{ card__flip: card.flip }">
      <div class="card__front">
        <img width="80%" :src="require(`@/assets/icons/${card.image}`)" />
      </div>
      <div class="card__back" />
    </div>
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Card",

  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters(["TURNED_CARDS_LIMIT"]),

    disableButton() {
      return !this.card.flip || this.TURNED_CARDS_LIMIT || this.card.foundPair;
    },
  },

  methods: {
    clickFlipCard() {
      this.$emit("flip-card", this.card);
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
    background-image: url("../assets/fundo-carta.jpg");
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
