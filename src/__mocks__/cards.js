const imagens = [
  "css.svg",
  "html.svg",
  "javascript.svg",
  "react.svg",
  "typescript.svg",
  "vue.svg",
];

const cardsSetPar = imagens.map((item, index) => {
  return {
    image: item,
    idPar: index,
    flip: false,
    foundPair: false,
  };
});

const cardsSetId = [...cardsSetPar, ...cardsSetPar].map((item, index) => {
  return {
    ...item,
    id: index,
  };
});

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const cards = shuffleArray(cardsSetId);
