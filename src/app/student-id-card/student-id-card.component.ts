import { Component } from '@angular/core';
import { StudentIdCardService } from '../student-id-card.service';

@Component({
  selector: 'app-student-id-card',
  templateUrl: './student-id-card.component.html',
  styleUrls: ['./student-id-card.component.css']
})
export class StudentIdCardComponent {

  students:any=[];

  searchWord:string="";
  
  coulumnName:string="";
  order:string="";

  constructor(private _studentIdCardService:StudentIdCardService){
    _studentIdCardService.getAllstudents().subscribe(
      (data:any)=>{
          this.students=data
      },
      (err:any)=>{
        alert("Internet server error")
      }
    )

  }
  filterComponent(){
    this._studentIdCardService.getFilteredStudentIdCards(this.searchWord).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internet server issue")
      }
    ) 
  }
  sortedComponent(){
    this._studentIdCardService.getSortedStudentIdcards(this.coulumnName,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internet server error")
      }
    )

  }
}
