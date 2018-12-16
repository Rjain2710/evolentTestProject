import { Component, OnInit } from '@angular/core';
import { CommonDataService } from "./common-data.service";
import { FormGroup, FormControl, FormBuilder,  Validators } from '@angular/forms';

import { Observable } from "rxjs";
declare var $ : any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public contactList:any;
  public contactForm = {
      firstname: "",
      name: "",
      email: "",
      phone: "",
  }
  angForm: FormGroup;
  constructor(private commonDataService: CommonDataService, private fb: FormBuilder) {
    this.createForm();
   }

    createForm() {
    this.angForm = this.fb.group({
      firstname: new FormControl(['', Validators.required ]),
      lastname:new FormControl(['', Validators.required ]),
      email: new FormControl(['', Validators.required ]),
      phone: new FormControl(['', Validators.required]),
   });
  }
 
  ngOnInit() {
    this.loadContactDetails();
  }

  loadContactDetails(){
    this.contactList =  [
        {
            "id": 1,
            "fname": "Test001",
            "lname": "Dummy001",
            "email": "Test@dummy001.com",
            "phoneNo": 1000000,
            "status": 0,
        },
        {
            "id": 2,
            "fname": "Test002",
            "lname": "Dummy002",
            "email": "Test@dummy002.com",
            "phoneNo": 100014478,
            "status": 1,
        },
          {
            "id": 3,
            "fname": "Test003",
            "lname": "Dummy003",
            "email": "Test@dummy003.com",
            "phoneNo": 1000000,
            "status": 1,
        },{
            "id": 4,
            "fname": "Test004",
            "lname": "Dummy004",
            "email": "Test@dummy004.com",
            "phoneNo": 1000000,
            "status": 0,
        }
    ]
 }

 addContact(){ }

}
