import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import {  interval, Subscription } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class OrderintervalService{

  subscription:Subscription[]=[];

  orderConfirm:any=[];
  newDate:any=[];
  date:any=[];
  dateFormat:any=[];
  normaldateFormat:any=[];
  orderDate:any=[];


  getOrderedDate:any=[];
  setOrderedDate:any=[];


  getOrderedDetails:any=[];
  setOrderedDetails:any=[];


  userMob:any=[];
  loggedPhonenumber:any=[];

  customerDetails:any=[];
  OrderDetails:any=[];


  intervalId:any;

  pastOrderDetails:any=[];
  deliveredOrderDetails:any=[];
  getDeliveredDate:any=[];
  deliveryDateFormat:any=[];
  deliveryDetails:any=[];
  constructor(private http:HttpClient) {

  }




getTime(ordereddate:any){
  this.loggedPhonenumber = sessionStorage.getItem('profilepage');
  this.userMob = JSON.parse(this.loggedPhonenumber);
  this.http.get("http://localhost:3000/Register/"+this.userMob.regemail).subscribe(x=>{
    this.customerDetails=x;
    this.setOrderedDetails=this.customerDetails.orders
    this.getOrderedDate=this.customerDetails.orderedDate
  if(this.getOrderedDate==null){
    this.dateFormat=[ordereddate];
    this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{orderedDate:this.dateFormat}).subscribe(x=>{
      console.log(x);
     });;
  }
  else{
    this.getOrderedDate.push(ordereddate);
    this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{orderedDate:this.getOrderedDate}).subscribe(x=>{
      console.log(x);
     });;
  }
});
}

getDeliveredTime(deliveredTime:any){
  this.loggedPhonenumber = sessionStorage.getItem('profilepage');
  this.userMob = JSON.parse(this.loggedPhonenumber);
  this.http.get("http://localhost:3000/Register/"+this.userMob.regemail).subscribe(x=>{
    this.customerDetails=x;
    this.pastOrderDetails=this.customerDetails.ordered
    this.getDeliveredDate=this.customerDetails.deliveredDate
  if(this.getDeliveredDate==null){
    this.deliveryDateFormat=[deliveredTime];
    this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{deliveredDate:this.deliveryDateFormat}).subscribe(x=>{
      console.log(x);
     });;
  }
  else{
    this.getDeliveredDate.push(deliveredTime);
    this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{deliveredDate:this.getDeliveredDate}).subscribe(x=>{
      console.log(x);
     });;
  }
});
}


startInterval(){
  setInterval(()=>{
    this.loggedPhonenumber = sessionStorage.getItem('profilepage');
  this.userMob = JSON.parse(this.loggedPhonenumber);
  this.http.get("http://localhost:3000/Register/"+this.userMob.regemail).subscribe(x=>{
    this.customerDetails=x;
    this.setOrderedDetails=this.customerDetails.orders
    this.pastOrderDetails=this.customerDetails.ordered
    this.getOrderedDate=this.customerDetails.orderedDate
    this.getDeliveredDate=this.customerDetails.deliveredDate
    if(this.getOrderedDate!=null || this.getDeliveredDate!=null){
      this.date=new Date();
      this.normaldateFormat=formatDate(this.date.getTime(), 'dd-MMM-yyyy hh:mm:ss a','en-US','+0530');

      if(this.getOrderedDate[0]==this.normaldateFormat){
        if(this.setOrderedDetails.length>=0 && this.getOrderedDate.length>=0){
        this.getOrderedInfo(this.setOrderedDetails[0]);
        this.setOrderedDetails.splice(0,1);
        this.getOrderedDate.splice(0,1);
          this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{orders:this.setOrderedDetails}).subscribe(x=>{
            console.log(x);
          });

        console.log(this.getOrderedDate);
          this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{orderedDate:this.getOrderedDate}).subscribe(x=>{
            console.log(x);
           });;
        }

      }
      else if(this.getDeliveredDate[0]==this.normaldateFormat){

        if(this.getDeliveredDate.length>=0){
          console.log("works");
          this.getDeliveredInfo(this.pastOrderDetails[0])
          this.pastOrderDetails.splice(0,1);
          this.getDeliveredDate.splice(0,1);
          this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{ordered:this.pastOrderDetails}).subscribe(x=>{
            console.log(x);
          });

        console.log(this.getDeliveredDate);
          this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{deliveredDate:this.getDeliveredDate}).subscribe(x=>{
            console.log(x);
           });;
        }
      }

      // console.log(this.date.toString().slice(22,24));
    }


  });
  },1000);
}

getOrderedInfo(orderedInfo:any){
  console.log(orderedInfo);
    this.loggedPhonenumber = sessionStorage.getItem('profilepage');
    this.userMob = JSON.parse(this.loggedPhonenumber);
    this.http.get("http://localhost:3000/Register/"+this.userMob.regemail).subscribe(x=>{
      this.customerDetails=x;
      this.OrderDetails=this.customerDetails.ordered;

      if(this.OrderDetails==null || this.OrderDetails.length==0){
         this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{ordered:[orderedInfo]}).subscribe(x=>{
          console.log(x);
         });
      }
      else{
        this.OrderDetails.push(orderedInfo);
        this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{ordered:this.OrderDetails}).subscribe(x=>{
          console.log(x);
         });;
      }

    })
  }


getDeliveredInfo(deliveredInfo:any){
  console.log(deliveredInfo);
    this.loggedPhonenumber = sessionStorage.getItem('profilepage');
    this.userMob = JSON.parse(this.loggedPhonenumber);
    this.http.get("http://localhost:3000/Register/"+this.userMob.regemail).subscribe(x=>{
      this.customerDetails=x;
      this.deliveryDetails=this.customerDetails.deliveredOrders;

      if(this.deliveryDetails==null || this.deliveryDetails.length==0){
        console.log("mani");
         this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{deliveredOrders:[deliveredInfo]}).subscribe(x=>{
          console.log(x);
         });
      }
      else{
        this.deliveryDetails.push(deliveredInfo);
        this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{deliveredOrders:this.deliveryDetails}).subscribe(x=>{
          console.log(x);
         });;
      }

    })
  }

}