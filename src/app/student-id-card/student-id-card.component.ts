import { Component } from '@angular/core';
import { StudentIdCardService } from '../student-id-card.service';

@Component({
  selector: 'app-student-id-card',
  templateUrl: './student-id-card.component.html',
  styleUrls: ['./student-id-card.component.css']
})
export class StudentIdCardComponent {

  students:any=[];

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
    this._studentIdCardService.getFilteredStudentIdCards().subscribe(
      (data:any)=>{
        

      }
    )
    
  }
}
