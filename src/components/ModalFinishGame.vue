<template>
  <div class="overlay">
    <div class="modal">
      <h1 class="modal__title">Fim de jogo</h1>

      <h3>Taxa de acertos: {{ HITS_PERCENTAGE }}%</h3>

      <img
        class="modal__image"
        :src="require(`../assets/${memoryLevel.image}`)"
      />

      <h3>Seu nível de memória é:</h3>
      <h2>{{ memoryLevel.text }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",

  computed: {
    ...mapGetters(["HITS_PERCENTAGE"]),

    memoryLevel() {
      return this.memoryLevelCases.find(
        (item) => item.min <= this.HITS_PERCENTAGE
      );
    },
  },

  data() {
    return {
      memoryLevelCases: [
        {
          text: "Excelente",
          min: 75,
          image: "kitekat-4.png",
        },
        {
          text: "Bom",
          min: 50,
          image: "kitekat-3.png",
        },
        {
          text: "Esquecido",
          min: 25,
          image: "kitekat-2.png",
        },
        {
          text: "Amnésia",
          min: 0,
          image: "kitekat-1.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.modal {
  color: white;
  background-color: #242424;
  padding: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__title {
    margin-bottom: 18px;
  }

  &__image {
    margin: 12px;
  }
}
</style>
