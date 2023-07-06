import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class EvmartserviceService {
  form:any;
  constructor(private http:HttpClient,private route:Router) {}

  serviceget(){
    return this.http.get<any>("http://localhost:3000/Services")
  }

  serviceform(data:any){
    console.log(data);
    localStorage.setItem('serviceform',data);
  }

  storedata(brand:any,varient:any,vehiclenumber:any,problem:any,mail:any,date:any,category:any){
    this.http.post<any>("http://localhost:3000/Serviceform",{email:mail,Brand:brand,varient:varient,vehiclenumber:vehiclenumber,problem:problem,category:category,date:date}).subscribe((x)=>{
      setTimeout(()=>{
        this.route.navigateByUrl("/Service");
       },4000)
    alertifyjs.success().setContent('<h3>Form Submitted. We will reach you through mail soon</h3>').show();
    })
  }

  retrieveserv(){
   return this.http.get<any>("http://localhost:3000/Serviceform");
  }
}
