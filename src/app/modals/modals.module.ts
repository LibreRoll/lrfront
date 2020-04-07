import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './modals/modals.component';
import {ModalService} from './modal.service';
import { UserModalComponent } from './user-modal/user-modal.component';



@NgModule({
  declarations: [ModalsComponent, UserModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalsComponent
  ],
  providers: [
    ModalService
  ]
})
export class ModalsModule { }
