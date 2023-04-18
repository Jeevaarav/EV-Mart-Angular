import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderbookingService {
  store:any="";
  orderarray:any;
  order:any={};
  constructor(private http:HttpClient) { }
  orderbook(a:any,b:any){
    this.http.get<any>("http://localhost:3000/Register").subscribe((y)=>{
    const useremail=y.find((sub:any)=>{
      this.store=sub;
      this.orderarray=this.store.order;
      return sub.regemail==b;
    })
    if(useremail){
      if(this.store.order!=null){
        alert("Order Added");
        this.orderarray.push(a);
        console.log(this.orderarray);
        this.http.patch<any>("http://localhost:3000/Register/"+b,{order:this.orderarray}).subscribe((z)=>{
          console.log(z);
        });
      }
      else{
        alert("Order Added");
        this.http.patch("http://localhost:3000/Register"+"/"+b,{order:[a]}).subscribe((w)=>{
          console.log(w);
        });
      }
    }
    else{
      alert("not found");
    }
    })
  }
}
