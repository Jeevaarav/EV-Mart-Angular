import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  forgotnew:boolean=false;
  constructor(private http:HttpClient,private routes:Router) { }
  forgotuser(custmail:any,custpass:any){
    this.http.get<any>("http://localhost:3000/Register").subscribe((data)=>{
      const user=data.find((pass:any)=>{
        return pass.regemail==custmail && pass.regpass==custpass;
      });
      if(user){
        this.forgotnew=true;
      }
      else{
        
      }
    })
  }
}
