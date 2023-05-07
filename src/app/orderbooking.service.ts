import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderbookingService {
  store:any="";
  storejson:any;
  constructor(private http:HttpClient) { }

  productpage(order:any){
    this.http.get<any>("http://localhost:3000/vehicleBrands").subscribe((x)=>{
      const user=x.find((y:any)=>{
        this.store=y;
        return y.Brandname==order;
      });
      if(user){
       this.storejson=JSON.stringify(this.store);
        console.log(this.storejson);
        localStorage.setItem('orderpage1',this.storejson);
      }
      else{
        alert("not found");
      }
    })
  }
}
