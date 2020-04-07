import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  constructor(public modals: ModalService) { }

  ngOnInit(): void {
  }

}
