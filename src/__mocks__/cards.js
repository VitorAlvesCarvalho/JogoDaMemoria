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

export const cards = [...cardsSetPar, ...cardsSetPar].map((item, index) => {
  return {
    ...item,
    id: index,
  };
});
