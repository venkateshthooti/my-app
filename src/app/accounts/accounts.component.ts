import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent {
  accounts: any = [];

  word: string = '';
  columnName: string = '';
  order: string = '';

  numberOfRows: number = 0;
  pages: number = 0;

  account_name:string="";
  available_balance:string="";
  account_number:string="";
  city:string="";
  profie_picture:string="";
  id:string="";

  acountDetails:any={}
 
  constructor(private _accountsService: AccountsService) {
    _accountsService.getAccounts().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert('Internal server error');
      }
    );
  }

  filterComponent() {
    this._accountsService.getFilteredAccountsService(this.word).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert('Internet server issue');
      }
    );
  }
  sortComponent() {
    this._accountsService
      .getSortedAccountsService(this.columnName, this.order)
      .subscribe(
        (data: any) => {
          this.accounts = data;
        },
        (err: any) => {
          alert('Internet Server issue');
        }
      );
  }
  deleteComponent(id: number) {
    this._accountsService.deleteAccountservice(id).subscribe(
      (data: any) => {
        alert('Deleted successfully...');
        location.reload();
      },
      (err: any) => {
        alert('Internet server issue');
      }
    );
  }

  paginationComponent() {
    this._accountsService.getPaginationAccountsService(this.numberOfRows,this.pages).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert('Internet server issue');
      }
    );
  }

  postComponent(){
    this.acountDetails.account_name=this.account_name;
    this.acountDetails.available_balance=this.available_balance;
    this.acountDetails.account_number=this.account_number;
    this.acountDetails.city=this.city;
    this.acountDetails.profie_picture=this.profie_picture;
    this.acountDetails.id=this.id;

    this.accounts=this.acountDetails
    this._accountsService.postAccountsService( this.accounts)
  }



}
