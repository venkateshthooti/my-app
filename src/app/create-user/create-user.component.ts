import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {


  public userForm:FormGroup=new FormGroup(
    {
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
      email:new FormControl(),
      phone:new FormControl(),
      address:new FormGroup( 
        {
          city:new FormControl(),
          pin:new FormControl()
        }
      ),
      type: new FormControl(),
      // busFee:new FormControl(),
      // hostelFee:new FormControl()

      cards:new FormArray([])
    }
  )

  get cardsFormarray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormarray.push(
      new FormGroup({
        cardNumber:new FormControl('',[Validators.required]),
        expiry:new FormControl(),
        cvv:new FormControl()
      })
    )
  }
  delete(num:number){

    this.cardsFormarray.removeAt(num);
  }

  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{

        if(data=='dayscholor'){
          this.userForm.addControl('busFee',new FormControl())
          this.userForm.removeControl('hostelFee');
        }else{
          this.userForm.addControl('hostelFee',new FormControl());
          this.userForm.removeControl('busFee')
        }

      }
    )
  }

  submit(){

    console.log(this.userForm)
  }
}
