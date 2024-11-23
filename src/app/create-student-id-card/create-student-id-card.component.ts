import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { StudentIdCardService } from '../student-id-card.service';

@Component({
  selector: 'app-create-student-id-card',
  templateUrl: './create-student-id-card.component.html',
  styleUrls: ['./create-student-id-card.component.css']
})
export class CreateStudentIdCardComponent {

  
  constructor(private _studentIdCardService:StudentIdCardService){
  
  }

  public studenIdCardForm:FormGroup=new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      dob: new FormControl(),
      profile_picture: new FormControl(),
      email: new FormControl(),
      school_logo: new FormControl(),
      school_name: new FormControl(),
      school_city: new FormControl(),
      school_pin: new FormControl()
    }
  )

  createSudentIdComponent(){
    console.log(this.studenIdCardForm)
    this._studentIdCardService.createStudentIdservice(this.studenIdCardForm.value).subscribe(
      (data:any)=>{
        alert("New id card creation successfull....!")
      },
      (err:any)=>{
        alert("Creation failed")
      }
    )
  }


}
