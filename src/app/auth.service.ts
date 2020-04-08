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

  public async logIn(user, password) {
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    return wait(2000).then(() => {
      this.hLoggedIn = true;
    });
  }

  public async logOut(user, password) {
    this.hLoggedIn = false;
  }
}
