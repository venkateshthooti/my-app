import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) { 

  }
  getAccounts():Observable<any>{
   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }

  getFilteredAccountsService(word:string):Observable<any>{

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+word)
  }

  getSortedAccountsService(columnName:string,order:string){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+columnName+"&order="+order)
  }
  deleteAccountservice(id:number){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)

  }

  getPaginationAccountsService(numberOfRows:number,pages:number):Observable<any>{
  return  this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+numberOfRows+"&page="+pages)

  }
  postAccountsService(accounts:any){

    this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",accounts).subscribe(

      (data:any)=>{
        alert("Posted successfully")
      },
      (err:any)=>{
        alert("Not posted")
      }
    )
  }

  createPostAccountService(data:any):Observable<any>{

   return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)

  }

  // updateAcountService(id:string,updatedAccount:any):Observable<any>{
  //   return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id+','+updatedAccount)
  // }






}
