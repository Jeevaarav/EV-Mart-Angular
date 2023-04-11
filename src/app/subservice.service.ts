import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubserviceService {

  constructor(private http:HttpClient) { }
  subscriptiondata(subopen:any){
    console.log(subopen);
    return this.http.post<any>("http://localhost:3000/subscription",subopen);
  }
}
