import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-craete-accounts',
  templateUrl: './craete-accounts.component.html',
  styleUrls: ['./craete-accounts.component.css']
})
export class CraeteAccountsComponent {

//  id:string="";
//  account_name:string="";
//  updatedAccount:any=[]


  uniqueID:string=""
  columnName:string=""
  public updateForm:FormGroup=new FormGroup(
    {
      id:new FormControl(),
      account_name:new FormControl()
    }
  )
 

  public accountForm:FormGroup=new FormGroup(
    {
      account_name:new FormControl(),
      available_balance:new FormControl(),
      account_number:new FormControl(),
      city:new FormControl(),
      profie_picture:new FormControl()
      // account_name:new FormControl();
    }
  )
  constructor(private _accountsService:AccountsService,_activatedRoute:ActivatedRoute){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.uniqueID=data.id
        _accountsService.getPerticularAccount(data.id).subscribe(
          (data:any)=>{
            this.accountForm.patchValue(data)
          }
        )
      }
        )
    }
  
  submit(){
    console.log(this.accountForm)

    if(this.uniqueID){
      this._accountsService.updateAccount(this.uniqueID,this.accountForm.value).subscribe(
        (data:any)=>{
          console.log(data)
          alert("updated successfully")
        },
        (err:any)=>{
          alert("upadation failed")
        }
      )
    }else{
      this._accountsService.createPostAccountService(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("Created successfully...!")
        },
        (err:any)=>{
          alert("Creation failed...!")
        }
        
      )
  

    }

  }





  // update(){
  //   this.updatedAccount.id=this.id
  //   this.updatedAccount.account_name=this.account_name;

  //   // this._accountsService.updateAcountService(this.id,this.updatedAccount).subscribe(
  //   //   (data:any)=>{
  //   //     alert("Updated successfully")
  //   //   },
  //   //   (error:any)=>{
  //   //     alert("Not updated...?")
  //   //   }
  //   // )
  // }

}
