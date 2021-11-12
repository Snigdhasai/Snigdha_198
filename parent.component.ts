import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { MobileModel } from 'src/Model/mobileModel';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {


  @ViewChild(ChildComponent) child:any;
  productinparent:MobileModel[]=[];
 // p1:MobileModel[]=[];

  ngAfterViewInit()
  {
    this.productinparent=this.child.productinchild;
    //this.p1[0]=this.productinparent[0];
    console.log(this.productinparent);
    //console.log(this.p1[0]);
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
