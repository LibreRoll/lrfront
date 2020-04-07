import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modals/modal.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  constructor(public modals: ModalService) {
  }

  ngOnInit(): void {
  }

  openLogInModal(): void {
    this.modals.openModal('login');
  }

}
