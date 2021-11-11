import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ContactDetails, ContactRequest } from 'src/Model/ContactDetailsModel';
@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.css']
})
export class UserContactFromComponent implements OnInit 
{
  contactForm:FormGroup;
  countries = ['USA', 'Germany', 'Italy', 'France']
  requestTypes = ['Claim', 'Feedback', 'Help Request']

  createFormGroup()
  {
    return new FormGroup({
cForm:new FormGroup({
  firstname:new FormControl('',[Validators.required,Validators.minLength(5)]),
  lastname:new FormControl('',[Validators.required,Validators.minLength(2)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  mobileno:new FormControl(),
  gender:new FormControl(),
  country:new FormControl(),
  ismarried:new FormControl()
}),
requestType:new FormControl(),
  text:new FormControl()
  });
}

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

  constructor(private formBuilder:FormBuilder) 
  { 
    this.contactForm = this.createFormGroup();
  }

  createFormGroupWithBuilder(formBuilder:FormBuilder)
  {
    return formBuilder.group({
      cForm:formBuilder.group(new ContactDetails()),
      requestType:'',
      text:''
    });
  }

  onSubmit()
  {
    const result:ContactRequest=Object.assign({},this.contactForm.value);
    result.cForm=Object.assign({},result.cForm);
    console.log(result);
  }

  revert()
  {
    this.contactForm.reset();
    this.contactForm.reset({
      cForm:new ContactDetails(),
      requestType:'',
      text:''
    });
  }


  ngOnInit(): void 
  {

  }

}
