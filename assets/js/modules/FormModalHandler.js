export class FormModalHandler {
  constructor({ formSelector, modalSelector, modalMessageSelector, closeSelector, endpoint }) {
    this.form = document.querySelector(formSelector);
    this.modal = document.querySelector(modalSelector);
    this.modalMessage = document.querySelector(modalMessageSelector);
    this.closeButton = document.querySelector(closeSelector);
    this.endpoint = endpoint;

    this.init();
  }

  init() {
    if (!this.form || !this.modal || !this.modalMessage || !this.closeButton) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.closeButton.addEventListener('click', () => this.closeModal());
    window.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        body: formData
      });

      const text = await response.text();
      this.showModal(text);

      if (text.includes('✅')) this.form.reset();
    } catch (error) {
      this.showModal('❌ Erro ao enviar. Tente novamente.');
    }
  }

  showModal(message) {
    this.modalMessage.innerHTML = message;
    this.modal.style.display = 'flex';
  }

  closeModal() {
    this.modal.style.display = 'none';
  }
}