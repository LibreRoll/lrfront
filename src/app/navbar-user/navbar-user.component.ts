import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modals/modal.service';
import {AuthService} from '../auth.service';
import {faUser, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  faUser = faUser;
  faSignOut = faSignOutAlt;
  loggingOut = false;

  constructor(public modals: ModalService, public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  openLogInModal(): void {
    this.modals.openModal('login');
  }

  logOut(): void {
    this.loggingOut = true;
    this.auth.logOut().finally(() => this.loggingOut = false);
  }

}
