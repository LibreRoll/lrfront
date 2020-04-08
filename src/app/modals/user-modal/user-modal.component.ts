import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  faUser = faUser;
  faLock = faLock;
  loginInProgress = false;
  username: string;
  password: string;

  constructor(public modals: ModalService, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  logIn(): void {
    this.loginInProgress = true;
    this.auth.logIn(this.username, this.password)
      .then(
        () => {
          this.modals.closeModal();
          this.username = '';
          this.password = '';
        }
      )
      .catch()
      .finally(() => this.loginInProgress = false);
  }

}
