import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(public http : HttpClient ) { }

  singleCall(link : string) : Observable<any>{
    return this.http.get<any>(link)
  }

  pageCall(wantedType : string, wantedPage : number) : Observable<any>{
    return this.http.get<any>(`https://www.swapi.tech/api/${wantedType}?page=${wantedPage}&limit=9`)
  }


}
