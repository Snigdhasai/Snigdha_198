import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ContactDetails } from 'src/Model/ContactDetailsModel';
@Component({
  selector: 'app-user-contact-from',
  templateUrl: './user-contact-from.component.html',
  styleUrls: ['./user-contact-from.component.css']
})
export class UserContactFromComponent implements OnInit 
{


contactForm=new FormGroup({
  firstname:new FormControl(),
  lastname:new FormControl(),
  email:new FormControl(),
  mobileno:new FormControl(),
  gender:new FormControl(),
  country:new FormControl(),
  ismarried:new FormControl()
});

SubmitData()
{
  console.log(this.contactForm.value);
  let contactDet:ContactDetails=new ContactDetails();
  contactDet.firstname=this.contactForm.value["firstname"];
  contactDet.lastname=this.contactForm.value["lastname"];
  contactDet.mobileno=this.contactForm.value["mobileno"];
  contactDet.email=this.contactForm.value["email"];
  contactDet.gender=this.contactForm.value["gender"];
  contactDet.country=this.contactForm.value["country"];
  contactDet.ismarried=this.contactForm.value["ismarried"];
  console.log("Firstname:        " + contactDet.firstname);
  console.log("Lastname:         " + contactDet.lastname);
  console.log("Mobile Number:    " + contactDet.mobileno);
  console.log("Email:            " + contactDet.email);
  console.log("Gender:           " + contactDet.gender);
  console.log("Country:          " + contactDet.country);
  console.log("Martial Status:   " + contactDet.ismarried);
}

  constructor() { }

  ngOnInit(): void {
  }

}
