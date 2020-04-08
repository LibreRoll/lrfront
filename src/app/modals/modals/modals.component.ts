import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';
import {UserModalComponent} from '../user-modal/user-modal.component';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  constructor(public modals: ModalService) {
  }

  ngOnInit(): void {
  }
}
