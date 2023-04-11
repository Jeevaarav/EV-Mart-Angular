import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  countread(){
    return this.http.get<any>("http://localhost:3000/vehicleBrands");
  }
  vehaddition(add:any){
    return this.http.post<any>("http://localhost:3000/vehicleBrands",add);
  }
}
