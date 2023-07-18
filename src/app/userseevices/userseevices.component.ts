import { Component } from '@angular/core';
import { LogincredentialsService } from '../logincredentials.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-userseevices',
  templateUrl: './userseevices.component.html',
  styleUrls: ['./userseevices.component.css']
})
export class UserseevicesComponent {
  userPastOrders:any;
  pastOrdersCount:any;
  showOrder:any;
  showOrderDetails:Boolean=false;
  showPastOrders:any;
  userServiceLength:any;
  brandImage:any;
  serviceImage:any;
  date:any;
  customerServices:any;
  getTime:any;
  dateFormat:any=[];

  constructor(private _Services:LogincredentialsService){
    this._Services.registerDetails().subscribe((service)=>{
      const userOrders=service.find((userservice:any)=>{
        this.userPastOrders=userservice;
        return userservice.regemail==sessionStorage.getItem("logmail");
      })
      if(userOrders){
        this.pastOrdersCount=this.userPastOrders.service.length;
        this.showPastOrders=this.userPastOrders.service;
        // this.showOrder=this.userPastOrders.ordered;
        for(var j=0;j<this.userPastOrders.service.length;j++){
          this.customerServices=this.userPastOrders.service[j];
          this.date=new Date(this.userPastOrders.service[j].date);
          this.getTime=this.date.getTime();
          this.dateFormat[j]=formatDate(this.getTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
          console.log(this.dateFormat);
      }
          console.log(this.userPastOrders.service);
          // this.userServiceLength=this.userPastOrders.length;
          for(var i=0;i<1;i++){
            this.brandImage=this.userPastOrders.service[i].Brand;
            if(this.brandImage=="OLA"){
              this.serviceImage="../../assets/EV mart/OLAS1/display1.webp";
            }
            else if(this.brandImage=="Ampere"){
              this.serviceImage="../../assets/EV mart/Primus/display1.webp"
            }
            else if(this.brandImage=="Ather"){
              this.serviceImage="../../assets/EV mart/Ather450X/display1.webp"
            }
            else if(this.brandImage=="Revolt"){
              this.serviceImage="../../assets/EV mart/F77Original/display1.webp"
            }
            else if(this.brandImage=="HeroElectric"){
              this.serviceImage="../../assets/EV mart/OptimaCX/display1.webp"
            }
          } 
      }

    })
  }

    //view particular order billing
  viewOrderDetails(index:any){
    this.showOrderDetails=true;
    this.showOrder=this.userPastOrders.ordered[index];
    console.log(this.showOrder);
  }

    //view and hide
  showOrderbooked(){
    this.showOrderDetails=false;
  }
}
