import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
z:any;
  constructor(private http:HttpClient,private route:Router) { }
  countread(){
    return this.http.get<any>("http://localhost:3000/vehicleBrands");
  }
  vehaddition(add:any){
    return this.http.post<any>("http://localhost:3000/vehicleBrands",add);
  }

  servicecount(){
    return this.http.get<any>("http://localhost:3000/Serviceform");
  }

  replyform(reply:any){
    localStorage.setItem('replymail',JSON.stringify(reply));
  }

  sendEmail(url:any,data:any){
    console.log(url);
    return this.http.post(url,data);
  }

  postdata(mail:any,category:any,vehicleno:any,varient:any,date:any,time:any,reply:any){
    this.http.post<any>("http://localhost:3000/servicedone",{email:mail,category:category,vehicleno:vehicleno,varient:varient,date:date,time:time,reply:reply}).subscribe(()=>{
       this.http.get<any>("http://localhost:3000/Serviceform").subscribe((x)=>{
        let body={
          mail:mail,
          category:category,
          vehicleno:vehicleno,
          varient:varient,
          date:date,
          time:time,
          reply:reply
        }
        this.sendEmail("http://localhost:4000/Service",body).subscribe((mailinfo:any)=>{
        let res:any=mailinfo;
        });
      const user=x.find((z:any)=>{
        this.z=z;
        console.log(this.z.regemail);
        return z.email==mail;
      });
      if(user){
          this.http.delete('http://localhost:3000/Serviceform/'+this.z.regemail).subscribe((w)=>{
          console.log(w);
          })
      }
      else{
        alert("not found");
      }
    })
      alertifyjs.success("Service request accepted and Mail sent");
      setTimeout(()=>{
        this.route.navigateByUrl('/admin/adminserv')
      },4000);
    })
    // this.http.get<any>("http://localhost:3000/Serviceform").subscribe((x)=>{
    //   const user=x.find((z:any)=>{
    //     this.z=z;
    //     console.log(this.z.regemail);
    //     return z.email==mail;
    //   });
    //   if(user){
    //     console.log("http://localhost:3000/Serviceform/"+this.z.regemail);
    //     this.http.patch("http://localhost:3000/Serviceform/"+this.z.regemail,{Reply:reply,Date:date,Time:time}).subscribe((con)=>{
    //       console.log(con);
    //       this.route.navigateByUrl('/admin/adminserv').then(()=>{
    //         window.location.reload();
    //       });
    //     });
    //   }
    //   else{
    //     alert("Not found");
    //   }
    // })

  }
}
