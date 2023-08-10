import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class EvmartserviceService {
  form:any;
  serviceDetails:any;
  pushService:any;
  constructor(private http:HttpClient,private route:Router) {}

  serviceget(){
    return this.http.get<any>("http://localhost:3000/Services")
  }

  serviceform(data:any){
    localStorage.setItem('serviceform',data);
  }

  storedata(brand:any,varient:any,vehiclenumber:any,problem:any,mail:any,date:any,category:any){
    let service={
      email:mail,
      Brand:brand,
      varient:varient,
      vehiclenumber:vehiclenumber,
      problem:problem,
      category:category,
      date:date
    }
    this.http.get<any>("http://localhost:3000/Register").subscribe((userDetails)=>{
      const registerDetails=userDetails.find((userfind:any)=>{
        this.serviceDetails=userfind;
        return userfind.regemail==mail;
      })
      if(registerDetails){
        if(this.serviceDetails.service && this.serviceDetails.service.length>0 ){
          this.serviceDetails.service.push(service);
          this.http.patch<any>("http://localhost:3000/Register/"+mail,{service:this.serviceDetails.service}).subscribe((patchDetails)=>{
            setTimeout(()=>{
              this.route.navigateByUrl("/Service");
             },4000)
          alertifyjs.success().setContent('<h3>Form Submitted. We will reach you through mail soon</h3>').show();
          })
        }
        else{
          this.http.patch<any>("http://localhost:3000/Register/"+mail,{service:[service]}).subscribe((patchNewDetails)=>{
            setTimeout(()=>{
              this.route.navigateByUrl("/Service");
             },4000)
          alertifyjs.success().setContent('<h3>Form Submitted. We will reach you through mail soon</h3>').show();
          })
        }
        this.http.post("http://localhost:3000/Serviceform",service).subscribe((works)=>{
        console.log("works");
        })
      }
    })

  }

  retrieveserv(){
   return this.http.get<any>("http://localhost:3000/Serviceform");
  }
}
