import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentIdCardService {

  constructor(private _httpClient:HttpClient) {

   }

   getAllstudents():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
   }

  //  getFilteredStudentIdCards():Observable<any>{
  //  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  //  }







}
