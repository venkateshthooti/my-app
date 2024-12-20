import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentIdCardService {

  baseUrl:String="https://6128991386a213001729f9df.mockapi.io/test/v1/student"
  constructor(private _httpClient: HttpClient) {}

  getAllstudents(): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student'
    );
  }

  getFilteredStudentIdCards(searchWord: string): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter=' +
        searchWord
    );
  }

  getSortedStudentIdcards(columnName: string, order: string): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy=' +
        columnName +
        '&order=' +
        order
    );
  }

  deleteService(id: number): Observable<any> {
    return this._httpClient.delete(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id
    );
  }
  paginationService(limit: number, pageNumber: number): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=' +
        limit +
        '&page=' +
        pageNumber
    );
  }

  createStudentIdservice(studenIdCardForm: any): Observable<any> {
    return this._httpClient.post(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/student',
      studenIdCardForm
    );
  }

  getSingleStudentIdCard(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'/'+id)
  }
  updateStudentidCrad(id:string,data:any){
    return this._httpClient.put(this.baseUrl+'/'+id,data)
  }
}
