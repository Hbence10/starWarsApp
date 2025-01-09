import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(public http : HttpClient ) { }

  singleCall(wantedType : string) : Observable<any>{
    return this.http.get<any>("")
  }

  pageCall(wantedType : string, wantedPage : number) : Observable<any>{
    return this.http.get<any>("")
  }


}
