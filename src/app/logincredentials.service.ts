import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';

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
  retrievedata(custmail:any,custpass:any,returl:any,servurl:any){
    this.http.get<any>("http://localhost:3000/Register").subscribe((x)=>{
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
          console.log(servurl);
          this.route.navigate([servurl]).then(()=>{
            window.location.reload();
          });
        }
        else{
          console.log(returl);
          this.route.navigate([returl]);
        }
        localStorage.setItem('loggedin','true');
        sessionStorage.setItem('isLogged','true');
        this.logoutshow=true;
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

  registrationcheck(regmail:any,reguser:any,regpass:any,regconfirm:any,regphone:any){
    this.http.get<any>("http://localhost:3000/Register").subscribe((check)=>{
      const regcheck=check.find((find:any)=>{
        return find.regemail==regmail;
      });
      if(regcheck){
        this.regcheck="Email Id already exist, sign-in instead";
        return this.regcheck;
      }
      else{
        this.http.post<any>("http://localhost:3000/Register",{regemail:regmail,reguser:reguser,regpass:regpass,regconfirm:regconfirm,regphonenum:regphone}).subscribe((data)=>{
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
    this.http.get<any>("http://localhost:3000/Register").subscribe((update)=>{
      const userprofile=update.find((profile:any)=>{
        this.profilemail=localStorage.setItem('mailcheck',profile.regemail);
        console.log(this.profilemail);
        return profile.regemail==mail ;
      })
      if(userprofile){
         this.http.patch("http://localhost:3000/Register"+'/'+localStorage.getItem('mailcheck'),{regphonenum:phone,reguser:user}).subscribe((changedet)=>{
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
         console.log("success");
         window.location.reload();
        });
        }
      else{
        console.log("Cannot found");
      }
    })


  }
}
