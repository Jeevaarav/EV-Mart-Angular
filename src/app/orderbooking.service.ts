import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {url} from 'src/Environment/environment'
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class OrderbookingService {
  store:any="";
  storejson:any;
  constructor(private http:HttpClient, private route:Router,private logger:LoggerService) { }

  productpage(order:any){
    this.http.get<any>(url.getVehicleDetails).subscribe((vehicleDetails)=>{
      const user=vehicleDetails.find((vehicleName:any)=>{
        this.store=vehicleName;
        return vehicleName.Brandname==order;
      });
      if(user){
       this.storejson=JSON.stringify(this.store);
        sessionStorage.setItem('orderpage1',this.storejson);
        this.route.navigateByUrl('/orderpage');
      }
      else{
        this.logger.error("Brand not found");
        alert("Brand not found");
      }
    })
  }
}
