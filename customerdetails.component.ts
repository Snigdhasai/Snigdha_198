import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from 'src/Model/customer';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  @Input() customer:Customer=new Customer();
  @Output() customerChange:EventEmitter<Customer> =new EventEmitter<Customer>();
  @Output() customerAdd:EventEmitter<Customer> =new EventEmitter<Customer>();

  constructor() { }

  ngOnInit(): void 
  {

  }
  
  add()
  {
    this.customerAdd.emit(this.customer);
  }

  update()
  {
    this.customerChange.emit(this.customer);
  }

}
