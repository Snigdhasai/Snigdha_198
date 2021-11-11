import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/Model/UserLoginModel';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
user:UserModel={
  userid:"Kiya",
  pwd:"kiya"
};
  constructor() { }

  ngOnInit(): void {
  }

  ValidateUser(user:UserModel)
  {
    console.log(user);
  }
}
