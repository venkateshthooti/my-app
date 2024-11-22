import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _httpClient:HttpClient) { 

  }

  getPhotos():Observable<any>{
return this._httpClient.get("https://picsum.photos/v2/list?page=1&limit=100")
  }

}
