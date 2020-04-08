import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './modals/modals.component';
import {ModalService} from './modal.service';
import { UserModalComponent } from './user-modal/user-modal.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ModalsComponent, UserModalComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    ModalsComponent
  ],
  providers: [
    ModalService
  ]
})
export class ModalsModule { }
