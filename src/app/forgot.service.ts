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
  name:any;
  user:any;
  constructor(private _http:HttpClient,private routes:Router) { }
  forgotuser(custmail:any,custuser:any){
    this._http.get<any>("http://localhost:3000/Register").subscribe((data)=>{
      const user=data.find((pass:any)=>{
        this.name=pass.reguser;
        return pass.regemail==custmail && pass.reguser==custuser;
      });
      if(user){
        localStorage.setItem('forgotuser',this.name);
        this.routes.navigateByUrl('/login/forgot1/forgotnew');
        this.inputval=custmail;
      }
      else{
       this.errormsg="Email ID not registered, please check mail ID or sign up instead";
      // alert("Email ID not registered, please check mail ID or sign up instead");
      }
    })
  }

  forgotmail(url:any,user1:any){
    alert("works");
    // console.log(url);
    // console.log(user1);
    return this._http.post(url,user1);
  }

  changepassword(body:any,mail:any){
    const url="http://localhost:3000/Register";
   this._http.patch(url+"/"+mail,{regpass:body.forpass,regconfirm:body.confirmpass}).subscribe((change)=>{
    this.user=localStorage.getItem('forgotuser');
    let user1={
      mail:mail,
      user:this.user
    }
    alertifyjs.success().setContent('<h3>Password Changed Successfully</h3>');
    this.forgotmail("http://localhost:4000/forgot",user1).subscribe((info:any)=>{
      let res:any=info;
    });
    this.routes.navigateByUrl('/login');
   });
  }
}
