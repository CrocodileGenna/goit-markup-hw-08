(() => {
  const refs = {
    openModalBtn: document.querySelector(".hero__button"),
    closeModalBtn: document.querySelector(".modal-window__close"),
    modal: document.querySelector(".modal-window"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
