import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
import { environment } from 'src/environments/environment';
import {url} from 'src/environments/environment';
import {nodemailer} from 'src/environments/environment';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LogincredentialsService {
  loggedin:boolean=false;
  closenav:boolean=true;
  custemail:any;
  regcheck:any;
  resendmail:any;
  resenduser:any;
  username:any;
  password:any;
  logoutshow:boolean=false;
  store:any;
  reguser:any="";
  profiledetails:any;
  phone:any;
  user:any;
  email:any;
  profilepageget:any;
  parse:any;
  profilemail:any; address:any; profileaddress:any;
  constructor(private http:HttpClient,private route:Router,private logger:LoggerService) {
  }
  savedata(a:any){
    return this.http.post<any>(url.customerDetails,a);
  }

  registerDetails(){
    return this.http.get<any>(url.customerDetails);
  }
  // retrievedata(body:any){
  //   console.log(body);
  //   return this.http.get<any>("http://localhost:3000/Register"+"/"+body);
  // }
  retrievedata(custmail:any,custpass:any,returl:any,servurl:any){
    this.http.get<any>(url.customerDetails).subscribe((x)=>{
      const user=x.find((logged:any)=>{
        this.profiledetails=JSON.stringify(logged);
        sessionStorage.setItem('profilepage',this.profiledetails);
        localStorage.setItem('profilepage',this.profiledetails);
        sessionStorage.setItem('reguser',logged.reguser);
        sessionStorage.setItem('regphone',logged.regphonenum);
        return logged.regemail===custmail && logged.regpass===custpass;
      });
      if(user){
        this.custemail=custmail;
        this.reguser=localStorage.getItem('reguser');
        this.address=sessionStorage.getItem('profilepage');
        this.profileaddress=JSON.parse(this.address);
        if(!this.profileaddress.address){
          sessionStorage.removeItem('pincode');
          sessionStorage.removeItem('landmark');
          sessionStorage.removeItem('fulladdress');
          sessionStorage.removeItem('doorno');
        }
        else{
          sessionStorage.setItem('fulladdress',this.profileaddress.address[0].fulladdress);
          sessionStorage.setItem('doorno',this.profileaddress.address[0].doorno);
          sessionStorage.setItem('landmark',this.profileaddress.address[0].landmark);
          sessionStorage.setItem('pincode',this.profileaddress.address[0].pincode);
        }
        sessionStorage.setItem('logmail',custmail);
        sessionStorage.setItem('logpass',custpass);
        if(returl==null && servurl==null){
          this.route.navigateByUrl("/Product");
        }
        else if(servurl!=null){
          this.route.navigate([servurl]).then(()=>{
            window.location.reload();
          });
        }
        else{
          this.route.navigate([returl]);
        }
        localStorage.setItem('loggedin','true');
        sessionStorage.setItem('isLogged','true');
        this.logoutshow=true;
        this.logger.info("Login Successfull");
        return alert("Login Successfull");
      }
      else if(environment.adminmail==custmail && environment.adminpassword==custpass){
        this.route.navigateByUrl('/admin');
        alert("Admin login Successfull");
        sessionStorage.setItem('isAdminlogged','true');
        return this.closenav=false;
      }
      else{
        this.logger.error("Invalid Details");
        alert("Invalid Details");
      }
    });


  }
  sendEmail(url:any,data:any){
    return this.http.post(url,data);
  }
  resendEmail(reurl:any,redata:any){
    return this.http.post(reurl,redata);
  }

  registrationcheck(regmail:any,reguser:any,regpass:any,regconfirm:any,regphone:any){
    this.http.get<any>(url.customerDetails).subscribe((check)=>{
      const regcheck=check.find((find:any)=>{
        return find.regemail==regmail;
      });
      if(regcheck){
        this.regcheck="Email Id already exist, sign-in instead";
        this.logger.error("Email Id already exist, sign-in instead");
        return this.regcheck;
      }
      else{
        this.http.post<any>(url.customerDetails,{regemail:regmail,reguser:reguser,regpass:regpass,regconfirm:regconfirm,regphonenum:regphone,orders:[]}).subscribe((data)=>{
        alert("Thanks for registering EV Mart, Let's experience the EV world");
        localStorage.setItem('key',regmail);
        localStorage.setItem('key1',reguser);
        let user={
          mail:regmail,
          name:reguser
        }
        this.sendEmail(nodemailer.mailURL,user).subscribe((mailinfo:any)=>{
        let res:any=mailinfo;
        });
        this.route.navigateByUrl('/emailverify');
        this.logger.warn("Please verify your mail address");
        })
      }
    })
  }

  resendemail(){
    let resenduser={
      mail:localStorage.getItem('key'),
      name:localStorage.getItem('key1')
    }
    this.resendEmail(nodemailer.mailURL,resenduser).subscribe((mailinfo:any)=>{
        let res:any=mailinfo;
        });
        alertifyjs.success().setContent('<h3>Email resent success</h3>').show();
        this.logger.info("Mail resent");
        this.route.navigateByUrl('/emailverify');
  }


  userlog(){
    this.store=localStorage.getItem('loggedin');
    return this.store;
  }

  logout(){
    return this.loggedin=false;
  }
  userlogged(u:any,p:any){
    this.username=u,
    this.password=p;
  }


  profileupdate(phone:any,mail:any,user:any){
    this.http.get<any>(url.customerDetails).subscribe((update)=>{
      const userprofile=update.find((profile:any)=>{
        this.profilemail=localStorage.setItem('mailcheck',profile.regemail);
        return profile.regemail==mail ;
      })
      if(userprofile){
         this.http.patch(url.customerDetails+'/'+localStorage.getItem('mailcheck'),{regphonenum:phone,reguser:user}).subscribe((changedet)=>{
         this.phone=localStorage.setItem('updatephone',phone);
         this.user=localStorage.setItem('updateuser',user);
        this.profilepageget=localStorage.getItem('profilepage');
        this.parse=JSON.parse(this.profilepageget);
        let userdata={
          regemail:mail,
          regphonenum:phone,
          reguser:user
        }
        localStorage.setItem('profilepage',JSON.stringify(userdata));
         window.location.reload();
        });
        }
      else{
        this.logger.error("Username not found");
      }
    })


  }
}
