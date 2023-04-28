import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class LogincredentialsService {
  closenav:boolean=true;
  custemail:any;
  regcheck:any;
  resendmail:any;
  resenduser:any;
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
        this.custemail=custmail;
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
  resendEmail(reurl:any,redata:any){
    console.log(reurl);
    return this.http.post(reurl,redata);
  }

  registrationcheck(regmail:any,reguser:any,regpass:any,regconfirm:any){
    this.http.get<any>("http://localhost:3000/Register").subscribe((check)=>{
      const regcheck=check.find((find:any)=>{
        return find.regemail==regmail;
      });
      if(regcheck){
        this.regcheck="Email Id already exist, sign-in instead";
        return this.regcheck;
      }
      else{
        this.http.post<any>("http://localhost:3000/Register",{regemail:regmail,reguser:reguser,regpass:regpass,regconfirm:regconfirm}).subscribe((data)=>{
        alert("Thanks for registering EV Mart, Let's experience the EV world");
        localStorage.setItem('key',regmail);
        localStorage.setItem('key1',reguser);
        let user={
          mail:regmail,
          name:reguser
        }
        this.sendEmail("http://localhost:4000/sendmail",user).subscribe((mailinfo:any)=>{
        let res:any=mailinfo;
        });
        this.route.navigateByUrl('/emailverify');
        })
      }
    })
  }

  resendemail(){
    let resenduser={
      mail:localStorage.getItem('key'),
      name:localStorage.getItem('key1')
    }
    this.resendEmail("http://localhost:4000/sendmail",resenduser).subscribe((mailinfo:any)=>{
        let res:any=mailinfo;

        });
        alertifyjs.success().setContent('<h3>Email resent success</h3>').show();
        this.route.navigateByUrl('/emailverify');
  }
}
