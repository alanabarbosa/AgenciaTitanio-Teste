import { FormMask } from "./modules/FormMask.js";
import { FormHandler } from "./modules/FormHandler.js";
import { FormModalHandler } from "./modules/FormModalHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  
  const mask = new FormMask("#phone");
  const form = new FormHandler("#contactForm");
  form.init();
  mask.init();

  new FormModalHandler({
    formSelector: "#contactForm",
    modalSelector: "#modal",
    modalMessageSelector: "#modalMessage",
    closeSelector: "#closeModal",
    endpoint: "salvar.php"
  });  
});