import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


interface PeriodicElement {
  position: number;
  project_name: any;
  purchaser_name: string;
  supervisor: string;
  date_submit: string;
}


@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'project_name', 'purchaser_name', 'supervisor', 'date_submit', 'actions'];
  dataSource
  ELEMENT_DATA: PeriodicElement[] = []
  constructor() { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.ELEMENT_DATA = [
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 2", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
      { position: 1, project_name: "Project 1", purchaser_name: "Purchaser 1", supervisor: "Supervisor1/Supervisor2", date_submit: "11 Feb 2020" },
    ]

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

}
