import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private hLoggedIn = false;


  constructor(public router: Router) {
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
      this.router.navigate(['/']);
    });
  }

  public async signUp(user, password) {
    return wait(2000);
  }

  public getUsername(): string {
    if (this.loggedIn) {
      return 'Test User';
    }
    return null;
  }
}
