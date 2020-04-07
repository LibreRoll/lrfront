import {Component, OnInit} from '@angular/core';
import {faScroll, faHome, faDiceD20} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faScroll = faScroll;
  faHome = faHome;
  faD20 = faDiceD20;
  menuOpen = false;

  constructor() {
  }

  menuToggle(): void {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit(): void {
  }

}
