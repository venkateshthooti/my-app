import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-craete-accounts',
  templateUrl: './craete-accounts.component.html',
  styleUrls: ['./craete-accounts.component.css']
})
export class CraeteAccountsComponent {

 id:string="";
 account_name:string="";
 updatedAccount:any=[]

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
  constructor(private _accountsService:AccountsService){

  }
  submit(){
    console.log(this.accountForm)
    this._accountsService.createPostAccountService(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Created successfully...!")
      },
      (err:any)=>{
        alert("Creation failed...!")
      }
      
    )

  }





  update(){
    this.updatedAccount.id=this.id
    this.updatedAccount.account_name=this.account_name;

    // this._accountsService.updateAcountService(this.id,this.updatedAccount).subscribe(
    //   (data:any)=>{
    //     alert("Updated successfully")
    //   },
    //   (error:any)=>{
    //     alert("Not updated...?")
    //   }
    // )
  }

}
