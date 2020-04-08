import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {

  username: string;
  password: string;
  repeatPassword: string;
  signUpInProgress = false;
  signedUp = false;
  faUser = faUser;
  faLock = faLock;

  constructor(public modals: ModalService, public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  singUp(): void {
    this.signUpInProgress = true;
    this.auth.signUp(this.username, this.password)
      .then(() => {
        this.signedUp = true;
      })
      .finally(() => this.signUpInProgress = false);
  }

  goToLogIn(): void {
    this.close();
    this.modals.openModal('login');
  }

  close(): void {
    this.modals.closeModal();
  }
}
