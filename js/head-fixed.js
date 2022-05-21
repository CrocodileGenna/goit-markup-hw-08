const { height: HeaderHeight } = document
  .querySelector("Header")
  .getBoundingClientRect();

document.body.styles.paddingTop = `${HeaderHeight}px`;
