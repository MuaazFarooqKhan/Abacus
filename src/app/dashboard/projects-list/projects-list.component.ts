import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface PeriodicElement {
  position: number;
  bank: any;
  check_book_no: string;
  payee_name: string;
  amount: any;
  date_submit: string;
  status;
}

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'check_book_no', 'payee_name', 'amount', 'date_submit', 'status'];
  dataSource
  ELEMENT_DATA: PeriodicElement[] = []
  constructor() { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.ELEMENT_DATA = [
      {position:1 , bank:"UBL/PWD", check_book_no:"0001", payee_name:"Fahad", amount:"Rs.200,000", date_submit:"11 Feb 2020", status:"Approved"},
      {position:2 , bank:"UBL/Saddar", check_book_no:"0001", payee_name:"Ali", amount:"Rs.200,000", date_submit:"11 Feb 2020", status:"Approved"},
      {position:3 , bank:"UBL/Rwp", check_book_no:"0001", payee_name:"Danial", amount:"Rs.200,000", date_submit:"11 Feb 2020", status:"Approved"},
      {position:4 , bank:"UBL/PWD", check_book_no:"0001", payee_name:"Hussain", amount:"Rs.200,000", date_submit:"11 Feb 2020", status:"Approved"},
      {position:5 , bank:"UBL/Saddar", check_book_no:"0001", payee_name:"Fahad", amount:"Rs.200,000", date_submit:"11 Feb 2020", status:"Approved"},
      {position:6 , bank:"UBL/Rwp", check_book_no:"0001", payee_name:"Ali", amount:"Rs.200,000", date_submit:"11 Feb 2020", status:"Approved"},
      {position:7 , bank:"UBL/PWD", check_book_no:"0001", payee_name:"Danial", amount:"Rs.200,000", date_submit:"11 Feb 2020", status:"Approved"},
      {position:8 , bank:"UBL/Saddar", check_book_no:"0001", payee_name:"Hussain", amount:"Rs.200,000", date_submit:"11 Feb 2020", status:"Approved"},
    ]

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

}
