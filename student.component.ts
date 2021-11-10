import { Component, OnInit } from '@angular/core';
import { Student } from 'src/Models/StudentModel';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
stuID:number=0;
stuName:string="";
stuCity:string="";

nos:number[]=[1,2,3,4,5];
plist:Student[]=[];

 plist1:Student[]=
 [
  new Student(1,"Siri","Pune"),
  new Student(2,"Hari","Punjab"),
  new Student(3,"Ravi","Patna"),
  new Student(4,"kriya","Bangalore"),
  new Student(5,"Kiya","Hyderabad")
 ];

filterStudents=[];
filterByCity(s:string,s1:Student):boolean 
{
  let s2:boolean=s1.stucity==s;
  return s2;
}

 Save($event:any)
{
  /*console.log(this.stuID);
  console.log(this.stuName);
  console.log(this.stuCity);*/
  console.log(this.searchCity);
    
}

searchCity:string="";
 students=
 [
  {"id":1,"name":"Siri",city:"Pune"},
  {"id":2,"name":"Hari",city:"Punjab"},
  {"id":3,"name":"Ravi",city:"Patna"},
  {"id":4,"name":"kriya",city:"Bangalore"},
  {"id":5,"name":"Kiya",city:"Hyderabad"}
 ];

//  Show($event:any)
//  {
//    console.log(this.searchCity);
//    //if(this.searchCity=="Pune")
//    //{
//      for (let index = 0; index < this.students.length; index++) {
//        {
//         var d=this.students.find(a=>a.city==this.searchCity);
//         this.filterStudents.push(d?.city,d?.name,d?.id);
//        }
//        console.log(d?.city);
//        console.log(d?.name);
//        console.log(d?.id);
//      //}
    
     
   //}
   
 //}

  constructor() 
  { 
     
  }


  ngOnInit(): void {
  }

}
