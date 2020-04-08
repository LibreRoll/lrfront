import {Injectable} from '@angular/core';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

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
    return wait(2000).then(() => {
      this.hLoggedIn = true;
    });
  }

  public async logOut() {
    return wait(2000).then(() => {
      this.hLoggedIn = false;
    });
  }

  public async signUp(user, password) {
    return wait(2000);
  }
}
