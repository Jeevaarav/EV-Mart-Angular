import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  forgotnew:boolean=false;
  errormsg:any="";
  inputval:any="";
  constructor(private _http:HttpClient,private routes:Router) { }
  forgotuser(custmail:any,custuser:any){
    this._http.get<any>("http://localhost:3000/Register").subscribe((data)=>{
      const user=data.find((pass:any)=>{
        return pass.regemail==custmail && pass.reguser==custuser;
      });
      if(user){
        this.routes.navigateByUrl('/login/forgot1/forgotnew');
        this.inputval=custmail;
      }
      else{
       this.errormsg="Email ID not registered, please check mail ID or sign up instead";
      // alert("Email ID not registered, please check mail ID or sign up instead");
      }
    })
  }

  changepassword(body:any,mail:any){
    const url="http://localhost:3000/Register";
   return this._http.patch(url+"/"+mail,{regpass:body.forpass,regconfirm:body.confirmpass});
  }
}
