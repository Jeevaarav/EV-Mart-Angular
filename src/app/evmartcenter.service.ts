import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EvmartcenterService {

  constructor(private http:HttpClient,private route:Router) {
  }
  slot(){
  return this.http.get<any>("http://localhost:3000/EV-Martcenter");
  }
  storebooking(appoint:any,mail:any,phone:any,name:any,date:any,time:any,location:any){
    console.log(location);
    this.http.post<any>("http://localhost:3000/exchangebooking",{regemail:mail,phone:phone,username:name,dateofvisit:date,Timeslot:time,location:location}).subscribe((data)=>{
      let user={
        mail:mail,
        name:name,
        date:date,
        time:time,
        location:location
      }
      this.sendEmail1("http://localhost:4000/bookappoint",user).subscribe((mailinfo:any)=>{
        let res:any=mailinfo;
        });

    });
    this.route.navigateByUrl('/bookconfirm');
        setTimeout(()=>{
          this.route.navigateByUrl('');
        },5000)
  }
  sendEmail1(url:any,data:any){
    console.log(url);
    return this.http.post(url,data);
  }

}
