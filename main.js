(function () {
  const modalButton = document.querySelector(".user-login"),
    modalWindow = document.querySelector(".modal__form"),
    modalFon = document.querySelector(".modal__fon"),
    escButton = modalWindow.querySelector(".modal__ecs"),
    loginInput = modalWindow.querySelector(".modal__login"),
    loginPas = modalWindow.querySelector(".modal__password"),
    authButton = modalWindow.querySelector(".modal__auth"),
    errorPas = modalWindow.querySelector(".modal__error-pas"),
    errorLog = modalWindow.querySelector(".modal__error-log");

  function toggleModal() {
    modalWindow.classList.toggle("hidden");
    modalFon.classList.toggle("hidden");
    loginInput.classList.remove("invalid");
    loginPas.classList.remove("invalid");
    errorPas.classList.add("hidden");
    errorLog.classList.add("hidden");
    loginInput.value = "";
    loginPas.value = "";
  }

  function submitForm(evt) {
    const loginPasRegEx =
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

    const isLoginValid =
      loginInput.value.length > 3 && loginInput.value.trim() !== "";
    const isPasswordValid = loginPasRegEx.test(loginPas.value);
    const isFormValid = isLoginValid && isPasswordValid;

    if (isFormValid) {
      loginInput.classList.remove("invalid");
      loginPas.classList.remove("invalid");
    } else {
      evt.preventDefault();
      loginInput.classList.add("invalid");
      loginPas.classList.add("invalid");
      errorPas.classList.remove("hidden");
      errorLog.classList.remove("hidden");
    }
  }

  modalButton.addEventListener("click", toggleModal);
  modalFon.addEventListener("click", toggleModal);
  escButton.addEventListener("click", toggleModal);
  authButton.addEventListener("click", submitForm);

  document.addEventListener('keydown', function(evt) {

  if (evt.keyCode === 27) {
    toggleModal();
  }
});
})();