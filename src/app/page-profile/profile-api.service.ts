import {Injectable} from '@angular/core';
import {ProfileData} from './profile-data';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  profile: ProfileData;

  constructor(public auth: AuthService) {
  }

  init(user) {
    const username = user !== null ? user : this.auth.getUsername();
    this.profile = {
      username,
      charNumber: 2
    };
  }
}
