import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { UserlLoginComponent } from './userlogin/userlogin.component';
import { ProductsComponent } from './products/products.component';
import { UserContactFromComponent } from './user-contact-form/user-contact-form.component';
import { UsercontactComponent } from './usercontact/usercontact.component';
import { UserloginComponent } from './userlogin/userlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    //UserLoginComponent,
    ProductsComponent,
    UserContactFromComponent,
    UsercontactComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [UsercontactComponent]
})
export class AppModule { }
