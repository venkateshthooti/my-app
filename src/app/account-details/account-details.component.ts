import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  singleAccount:any={}
  
  constructor(private _activatedRoute:ActivatedRoute, _accountsService:AccountsService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _accountsService.getPerticularAccount(data.id).subscribe(
          (data:any)=>{
            this.singleAccount=data
          }
        )
      }
    )
  }

}
