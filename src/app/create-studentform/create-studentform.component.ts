import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-studentform',
  templateUrl: './create-studentform.component.html',
  styleUrls: ['./create-studentform.component.css']
})
export class CreateStudentformComponent {


  public studentform:FormGroup=new FormGroup(
    {
      name:new  FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
      age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
      class:new FormControl(),
      fatherName:new FormControl(),
      email:new  FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]),
      dob:new FormControl(),
      address:new FormGroup(
        {
          addressLine: new FormControl(),
          city:new FormControl(),
          state: new FormControl(),
          pincode:new  FormControl('',[Validators.required,Validators.min(6),Validators.min(6)]),
      }
    ),
      marks: new FormArray([]),
      type: new FormControl(),

      // busFee:new FormControl(),
      // hostelFee:new FormControl()

    }   
  )

  constructor(){
    this.studentform.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholor'){
          this.studentform.addControl('busFee',new FormControl());
          this.studentform.removeControl('hostelFee')
        }
        else{
          this.studentform.addControl('hostelFee',new FormControl())
          this.studentform.removeControl('busFee')
        }
      }
    )
  }


get marksFormArray(){
  return this.studentform.get('marks') as FormArray;
}
  addMarks(){

    this.marksFormArray.push(
      new FormGroup({
        studentClass:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(),
      }) 

    )
  }

  delete(num:number){
    this.marksFormArray.removeAt(num)

  }
  submit(){

    console.log(this.studentform)
  }









}


