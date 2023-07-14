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
  constructor(private http:HttpClient) {

  }




getTime(ordereddate:any){
  this.loggedPhonenumber = sessionStorage.getItem('profilepage');
  this.userMob = JSON.parse(this.loggedPhonenumber);
  console.log(this.userMob);
  this.http.get<any>("http://localhost:3000/Register/"+this.userMob.regemail).subscribe(x=>{
    this.customerDetails=x;
    this.setOrderedDetails=this.customerDetails.orders;
    this.getOrderedDate=this.customerDetails.orderedDate;
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
  this.startInterval();
});
}


startInterval(){
  setInterval(()=>{
    this.loggedPhonenumber = sessionStorage.getItem('profilepage');
  this.userMob = JSON.parse(this.loggedPhonenumber);
  this.http.get<any>("http://localhost:3000/Register/"+this.userMob.regemail).subscribe(x=>{
    this.customerDetails=x;
    this.setOrderedDetails=this.customerDetails.orders;
    this.getOrderedDate=this.customerDetails.orderedDate;
    if(this.getOrderedDate!=null){
      this.date=new Date();
      this.normaldateFormat=formatDate(this.date.getTime(), 'dd-MMM-yyyy hh:mm:ss a','en-US','+0530');

      if(this.getOrderedDate[0]==this.normaldateFormat){
        if(this.setOrderedDetails.length>=0 && this.getOrderedDate.length>=0){
        this.getOrderedInfo(this.setOrderedDetails[0]);
        }
        this.setOrderedDetails.splice(0,1);
        this.getOrderedDate.splice(0,1);
        if(this.setOrderedDetails.length>=0 && this.getOrderedDate.length>=0){
          this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{orders:this.setOrderedDetails}).subscribe(x=>{
            console.log(x);
          });

        console.log(this.getOrderedDate);
          this.http.patch("http://localhost:3000/Register/"+this.userMob.regemail,{orderedDate:this.getOrderedDate}).subscribe(x=>{
            console.log(x);
           });
        }
      }

      console.log(this.date.toString().slice(22,24));
    }


  });
  },1000);
}

getOrderedInfo(orderedInfo:any){
  console.log(orderedInfo);
    this.loggedPhonenumber = sessionStorage.getItem('profilepage');
    this.userMob = JSON.parse(this.loggedPhonenumber);
    this.http.get<any>("http://localhost:3000/Register/"+this.userMob.regemail).subscribe(x=>{
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

}