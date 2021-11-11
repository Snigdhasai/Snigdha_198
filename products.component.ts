import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/Model/productsModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
prod:productModel=
{
  prodID:1,
  prodName:"Coffee",
  Quantity:10
}

  constructor() { }

  ngOnInit(): void {
  }

  ValidateProduct(prod:productModel)
  {
    console.log(prod);
  }
}
