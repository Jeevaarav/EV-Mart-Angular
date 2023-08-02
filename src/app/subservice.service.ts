import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubserviceService {

  errormsg:any;
  constructor(private http:HttpClient) { }
  subscriptiondata(subopen:any){
    console.log(subopen);
    this.http.get<any>("http://localhost:3000/subscription").subscribe((subscribe)=>{
      const user=subscribe.find((registersubscribe:any)=>{
        console.log(registersubscribe);
        return registersubscribe.mail==subopen.mail;
      })
      if(user){
        this.errormsg="Already subscribed";
      }
      else{
        this.http.post<any>("http://localhost:3000/subscription",subopen).subscribe((mailregister)=>{
        console.log(mailregister);
        });
      }
    })

  }
}
