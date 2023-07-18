import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profileservice',
  templateUrl: './profileservice.component.html',
  styleUrls: ['./profileservice.component.css']
})
export class ProfileserviceComponent {
  customerDetails:any;
  customerServices:any=[];
  brandImage:any=[];
  userServiceLength:any;
  pastOrderHeading:Boolean=true;
  viewmorebtn:Boolean=true;
  showPastOrders:Boolean=true;
  serviceImage:any=[];
  date:any;
  getTime:any;
  dateFormat:any;
  serviceDone:any=[];
  serviceDoneDate:any;
  serviceDoneGetTime:any;
  serviceDoneDateFormat:any;
  ordersEmpty:Boolean=false;
  servicedoneempty:Boolean=false;
  Accepted:Boolean=true;
  noaccepted:Boolean=true;
  noservices:Boolean=false;
  serviceBrand:any;
  serviceVehicleImage:any;


  constructor(private _http:HttpClient){
    //service profile page 
    this._http.get<any>("http://localhost:3000/Register").subscribe((userDetails)=>{
      const findUser=userDetails.find((user:any)=>{
        this.customerDetails=user;
        return user.regemail==sessionStorage.getItem("logmail");
      });
      if(findUser){
       
        if(this.customerDetails.service || this.customerDetails.servicedone){
          if(this.customerDetails.service){
            if(this.customerDetails.service.length>0){
          for(var j=0;j<1;j++){
            this.customerServices[j]=this.customerDetails.service[this.customerDetails.service.length-1];
            this.date=new Date(this.customerDetails.service[j].date);
            this.getTime=this.date.getTime();
            this.dateFormat=formatDate(this.getTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
        }
        for(var i=0;i<1;i++){
          this.serviceBrand=this.customerDetails.service[this.customerDetails.service.length-1].Brand;
          console.log(this.serviceBrand);
          if(this.serviceBrand=="OLA"){
            this.serviceVehicleImage="../../assets/EV mart/OLAS1/display1.webp";
          }
          else if(this.serviceBrand=="Ampere"){
            this.serviceVehicleImage="../../assets/EV mart/Primus/display1.webp"
          }
          else if(this.serviceBrand=="Ather"){
            this.serviceVehicleImage="../../assets/EV mart/Ather450X/display1.webp"
          }
          else if(this.serviceBrand=="Revolt"){
            this.serviceVehicleImage="../../assets/EV mart/F77Original/display1.webp"
          }
          else if(this.serviceBrand=="HeroElectric"){
            this.serviceVehicleImage="../../assets/EV mart/OptimaCX/display1.webp"
          }
        } 
      }
      else{
        this.ordersEmpty=true;
      }
      }
      else{
        this.ordersEmpty=true;
        console.log("not found");
      }
      if(this.customerDetails.servicedone){
        if(this.customerDetails.servicedone.length>0){
        for(var w=0;w<1;w++){
          this.serviceDone[w]=this.customerDetails.servicedone[this.customerDetails.servicedone.length-1];
          this.serviceDoneDate=new Date(this.customerDetails.servicedone[w].date);
          this.serviceDoneGetTime=this.serviceDoneDate.getTime();
          this.serviceDoneDateFormat=formatDate(this.serviceDoneGetTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
      }
      for(var i=0;i<1;i++){
        this.brandImage=this.customerDetails.servicedone[i].Brand;
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
    else{
      this.servicedoneempty=true;
    }
      }
      else{
        this.servicedoneempty=true;
      }
      }
          else{
            this.noservices=true;
            this.noaccepted=false;
            this.viewmorebtn=false;
            this.Accepted=false;
            this.pastOrderHeading=false;
            this.servicedoneempty=true;
          }
        this.userServiceLength=this.customerServices.length;
       
      }
      console.log(this.serviceImage);
    })
  }

  viewOrderDetails(index:any){

  }
}
