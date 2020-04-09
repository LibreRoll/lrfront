import {Component, OnInit} from '@angular/core';
import {ProfileApiService} from '../profile-api.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

  constructor(public profile: ProfileApiService, public route: ActivatedRoute, public router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => this.profile.init(params.get('username'))
    );
  }

}
