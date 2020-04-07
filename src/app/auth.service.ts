import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private hLoggedIn = false;


  constructor() {
  }

  get loggedIn() {
    return this.hLoggedIn;
  }

  public logIn(user, password) {
    this.hLoggedIn = true;
  }

  public logOut(user, password) {
    this.hLoggedIn = false;
  }
}
