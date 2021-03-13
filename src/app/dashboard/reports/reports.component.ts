import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  activatedmenu = "Date Log"
  menus = ["Date Log", "Bank Log", "Cheque Book Log", "Payee Log", "Cost Log", "Request Payment"]
  constructor() { }

  ngOnInit() {
    
  }

  changeMenu(menu){
    this.activatedmenu = menu
    console.log(this.activatedmenu)
    console.log(menu)
  }

}
