import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductsComponent } from './products/products.component';
import { UserContactFromComponent } from './user-contact-from/user-contact-from.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ProductsComponent,
    UserContactFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [UserContactFromComponent]
})
export class AppModule { }
