import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogincredentialsService {
  closenav:boolean=true;
  constructor(private http:HttpClient,private route:Router) {
  }
  savedata(a:any){
    console.log(a);
    return this.http.post<any>("http://localhost:3000/Register",a);
  }
  // retrievedata(body:any){
  //   console.log(body);
  //   return this.http.get<any>("http://localhost:3000/Register"+"/"+body);
  // }
  retrievedata(custmail:any,custpass:any){
    this.http.get<any>("http://localhost:3000/Register").subscribe((x)=>{
      const user=x.find((logged:any)=>{
        return logged.regemail===custmail && logged.regpass===custpass;
      });
      if(user){
      this.route.navigateByUrl("/Product");
      return alert("Login Successfull");
      }
      else if(custmail=="evadmin2023@gmail.com" && custpass=="EVadmin@2023"){
        this.route.navigateByUrl('/admin');
        alert("Admin login Successfull");
        return this.closenav=false;
      }
      else{
        return alert("Invalid Details");
      }
    });


  }
  sendEmail(url:any,data:any){
    console.log(url);
    return this.http.post(url,data);
  }
}
