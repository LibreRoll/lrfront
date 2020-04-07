import {Injectable} from '@angular/core';

@Injectable()
export class ModalService {

  currentModal = null;

  constructor() {
  }

  openModal(modal): void {
    this.currentModal = modal;
  }

  closeModal(): void {
    this.currentModal = null;
  }

  modal(modal): boolean {
    return this.currentModal === modal;
  }

  get showsModal() {
    return this.currentModal !== null;
  }

}
