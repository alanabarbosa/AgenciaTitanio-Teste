import { FieldValidator } from "./FieldValidator.js";

export class FormHandler {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.validator = new FieldValidator(formSelector);
  }

  init() {
    if (!this.form) return;

    this.validator.bindValidationOnBlur();

    this.form.addEventListener("submit", (e) => {
      const allValid = this.validator.validateAll();
      if (!allValid) e.preventDefault();
    });
  }
}
