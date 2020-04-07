import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ModalsModule} from './modals/modals.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarUserComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        ModalsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
