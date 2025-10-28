export class FieldValidator {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.inputs = this.form ? this.form.querySelectorAll("input[required]") : [];
  }

  getFeedbackElement(input) {
    let feedback = input.parentNode.querySelector(".input-feedback");
    if (!feedback) {
      feedback = document.createElement("span");
      feedback.className = "input-feedback";
      input.parentNode.appendChild(feedback);
    }
    return feedback;
  }

  validateField(input) {
    const value = input.value.trim();
    const type = input.getAttribute("type");
    let isValid = true;
    let message = "";

    if (!value) {
      isValid = false;
      message = "Este campo é obrigatório.";
    } else if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
      if (!isValid) message = "Digite um e-mail válido.";
    } else if (input.id === "phone") {
      const digits = value.replace(/\D/g, "");
      isValid = digits.length >= 10;
      if (!isValid) message = "Digite um telefone válido.";
    } else if (input.id === "site") {
      const siteRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
      isValid = siteRegex.test(value);
      if (!isValid) message = "Digite um site válido (ex: https://google.com).";
    }

    input.classList.remove("valid", "invalid");
    input.classList.add(isValid ? "valid" : "invalid");

    const feedback = this.getFeedbackElement(input);
    feedback.textContent = isValid ? "" : message;
    feedback.classList.toggle("error", !isValid);
    feedback.classList.toggle("success", isValid);

    return isValid;
  }

  bindValidationOnBlur() {
    this.inputs.forEach((input) => {
      input.addEventListener("blur", () => this.validateField(input));
    });
  }

  validateAll() {
    let allValid = true;
    this.inputs.forEach((input) => {
      if (!this.validateField(input)) allValid = false;
    });
    return allValid;
  }
}