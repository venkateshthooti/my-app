import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentIdCardService } from '../student-id-card.service';

@Component({
  selector: 'app-student-id-cards-details',
  templateUrl: './student-id-cards-details.component.html',
  styleUrls: ['./student-id-cards-details.component.css']
})
export class StudentIdCardsDetailsComponent {
  studentIdCard:any={}

  constructor(private _activatedRoute:ActivatedRoute , _studentIdCardService:StudentIdCardService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _studentIdCardService.getSingleStudentIdCard(data.id).subscribe(
          (data:any)=>{
            this.studentIdCard=data
          }

        )
      }

    )
  }

}
