<template>
  <button @click="toogleFlip" class="card">
    <div class="card__content" :class="{ card__flip: flip }">
      <div class="card__front">
        <p>Frente</p>
      </div>
      <div class="card__back">
        <p>Costa</p>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {
      flip: false,
    };
  },

  methods: {
    toogleFlip() {
      this.flip = !this.flip;
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 100%;
  aspect-ratio: 3/4;
  perspective: 3000px;
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
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility: hidden;
  }

  &__front {
    background-color: red;
  }

  &__back {
    transform: rotateY(180deg);
    background-color: blue;
  }

  &__flip {
    transform: rotateY(180deg);
  }
}
</style>
