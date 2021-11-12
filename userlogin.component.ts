import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/Model/UserModel';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
//private userformdata:any={};

//emailid=new FormControl('',[Validators.required,Validators.minLength(5)]);
//password=new FormControl('',Validators.required)
  
  //loginform:FormGroup=this.bldr.group({emailid:this.emailid,password:this.password});

  //private showMessage:boolean=false;
  userformdata:any;
  constructor() { }

  ngOnInit(): void 
  {
    this.userformdata=new FormGroup({
      emailid:new FormControl(),
      passwd:new FormControl()
  });
}

  onsubmitClick(data:any)
  {
    var p=new User();
     
    //this.userformdata=this.loginform.value;
    // p.SetLoginId=this.userformdata.emailid;
    // p.SetLoginPwd=this.userformdata.password;
  
   p.SetLoginId=data.emailid;
    p.SetLoginPwd=data.password;
    //alert(this.loginform.value.password);
  if (p.GetLoginId=="abc@gmail.com" && p.GetLoginPwd=="abc@123") 
  {
   //this.showMessage=true;
    alert("Welcome");
  }
  else  
  {
  alert("Check it");
  
  }

}
}

