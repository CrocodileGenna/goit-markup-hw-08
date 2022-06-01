(() => {
  const refs = {
    openMenuBtn: document.querySelector(".nav-smoll__button-open"),
    closeMenuBtn: document.querySelector(".nav-smoll__button-close"),
    menu: document.querySelector(".nav-smoll"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
