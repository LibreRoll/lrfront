import {Component, OnInit} from '@angular/core';
import {ModalService} from '../modal.service';

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
