import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PageProfileComponent } from './page-profile/page-profile.component';
import {AuthGuard} from '../auth.guard';

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: PageProfileComponent},
  {path: ':username', component: PageProfileComponent}
];

@NgModule({
  declarations: [PageProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PageProfileModule { }
