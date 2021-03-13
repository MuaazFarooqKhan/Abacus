import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl,FormBuilder,FormGroup, Validators, } from '@angular/forms';

import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('open', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

  image = false;
  userStatus = false;
  userInfo = false;
  contact = false;
  tax = false;
  address = true;
  signupForm: FormGroup;
  
  states = [
    {name: 'Islamabad', abbrev: 'Isb'},
    {name: 'Rawalpindi', abbrev: 'Pindi'},
    {name: 'Lahore', abbrev: 'LHR'},
    {name: 'Peshawar', abbrev: 'PES'},
    {name: 'Karachi', abbrev: 'Kar'},
  ];

  constructor(private frmbuilder:FormBuilder
    
  ) {
    this.signupForm=frmbuilder.group({
      city:['',Validators.required],
      address:['',[Validators.required,Validators.maxLength(30)]],
      area:['',Validators.required],

    });
   }

    ngOnInit(){
      
  }
  uploadImage() {
    this.image = true;
    this.userStatus = false;
    this.userInfo = false;
    this.contact = false;
    this.tax = false;
    this.address = false;
  }
  status() {
    this.userStatus = true;
    this.image = false;
    this.userInfo = false;
    this.contact = false;
    this.tax = false;
    this.address = false;
  }
  userName() {
    this.userInfo = true;
    this.image = false;
    this.userStatus = false;
    this.contact = false;
    this.tax = false;
    this.address = false;
  }
  userPhone() {
    this.contact = true;
    this.image = false;
    this.userStatus = false;
    this.userInfo = false;
    this.tax = false;
    this.address = false;
  }
  userTax() {
    this.tax = true;
    this.contact = false;
    this.image = false;
    this.userStatus = false;
    this.userInfo = false;
    this.address = false;
  }
  userAddress() {
    this.address = true;
    this.contact = false;
    this.image = false;
    this.userStatus = false;
    this.userInfo = false;
    this.tax = false;
  }
  PostData(signupForm:any){
    console.log(this.signupForm.value);
    }
}