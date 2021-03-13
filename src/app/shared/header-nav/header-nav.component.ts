import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  shownotification = false;
  showprofile = false;
  constructor() { }

  ngOnInit() {
  }

  toggleNotification(){
    this.shownotification=!this.shownotification
    this.showprofile=false;
  }

  toggleProfile(){
    this.showprofile=!this.showprofile
    this.shownotification=false;
  }

}


