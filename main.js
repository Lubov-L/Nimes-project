(function () {
  const modalButton = document.querySelector(".user_login"),
    modalWindow = document.querySelector(".modal"),
    modalFon = document.querySelector(".modal_fon"),
    escButton = modalWindow.querySelector(".modal_ecs"),
    loginInput = modalWindow.querySelector(".modal_login"),
    loginPas = modalWindow.querySelector(".modal_password"),
    authButton = modalWindow.querySelector(".modal_auth"),
    errorPas = modalWindow.querySelector(".error_pas"),
    errorLog = modalWindow.querySelector(".error_log");

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