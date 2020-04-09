import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NavbarUserComponent} from './navbar-user/navbar-user.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ModalsModule} from './modals/modals.module';
import {PageMainComponent} from './page-main/page-main.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: PageMainComponent, pathMatch: 'full'},
  {path: 'profile', loadChildren: () => import('src/app/page-profile/page-profile.module').then(m => m.PageProfileModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarUserComponent,
    PageMainComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ModalsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
