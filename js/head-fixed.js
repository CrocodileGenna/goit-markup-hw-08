const { height: HeaderHeight } = document
  .querySelector(".header.conteiner")
  .getBoundingClientRect();

document.body.main.paddingTop = `${HeaderHeight}px`;
