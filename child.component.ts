import { Component, OnInit } from '@angular/core';
import { MobileModel } from 'src/Model/mobileModel';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  productinchild:MobileModel[]=[];
  

  constructor() 
  { 
    //this.getProducts();
  }

  ngOnInit(): void 
  {
    this.productinchild=[
      {     
         ProductId:1,                     
         Brand: "Oppo",   
         Price: 7810.23  

         /* BuyAccount: "123",  
         SalesAccount: "321"  
         ArtNo: "100",     
         Provider: "OppoProvider",      
         ProviderArtNo: "1Yu", */  
       },
   {
     ProductId:2,                     
     Brand: "Apple",   
     Price: 7811.23
   },

   {
     ProductId:3,                     
     Brand: "OnePlus",   
     Price: 7812.23 
   }
         ];

  }

  public getProducts()
  {
     /*this.productinchild=[
       {     
          ProductId:1,                     
          Brand: "Oppo",   
          Price: 7810.23  

          /* BuyAccount: "123",  
          SalesAccount: "321"  
          ArtNo: "100",     
          Provider: "OppoProvider",      
          ProviderArtNo: "1Yu",  
        },
    {
      ProductId:2,                     
      Brand: "Apple",   
      Price: 7811.23
    },

    {
      ProductId:3,                     
      Brand: "OnePlus",   
      Price: 7812.23 
    }
          ];*/
   }
  
}
  

