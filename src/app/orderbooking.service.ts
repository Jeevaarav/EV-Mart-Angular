import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderbookingService {
  store:any="";
  storejson:any;
  constructor(private http:HttpClient, private route:Router) { }

  productpage(order:any){
    this.http.get<any>("http://localhost:3000/vehicleBrands").subscribe((x)=>{
      const user=x.find((y:any)=>{
        this.store=y;
        return y.Brandname==order;
      });
      if(user){
        console.log("route enters");
       this.storejson=JSON.stringify(this.store);
        console.log(this.storejson);
        localStorage.setItem('orderpage1',this.storejson);
        this.route.navigateByUrl('/orderpage');
      }
      else{
        alert("not found");
      }
    })
  }
}
