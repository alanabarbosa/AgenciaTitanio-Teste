import { FieldValidator } from "./FieldValidator.js";

export class FormHandler {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.validator = new FieldValidator(formSelector);
  }

  init() {
    if (!this.form) return;

    this.validator.bindValidationOnBlur();

    this.validator.inputs.forEach((input) => {
      input.addEventListener("invalid", (e) => {
        e.preventDefault();
        this.validator.validateField(input); 
      });
    });

    this.form.addEventListener("submit", (e) => {
      const allValid = this.validator.validateAll();
      if (!allValid) e.preventDefault();
    });
  }
}