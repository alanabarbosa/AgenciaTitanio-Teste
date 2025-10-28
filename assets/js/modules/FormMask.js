export class FormMask {
  constructor(phoneSelector) {
    this.phoneInput = document.querySelector(phoneSelector);
    if (this.phoneInput) this.init();
  }

  init() {
    this.phoneInput.addEventListener("input", this.handleInput.bind(this));
  }

  handleInput(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    const formatted =
      value.length <= 10
        ? value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3")
        : value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");

    e.target.value = formatted;
  }
}
