import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,interval } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offer:any;
  date:any;
  Dday:any;
  milliSecondsInASecond:any;
  hoursInADay:any;
  minutesInAnHour:any;
  SecondsInAMinute:any;
  timeDifference:any;
  subscription:any;
  secondsToDday:any; minutesToDday:any; hoursToDday:any; daysToDday:any;
  limited:boolean=false;
  showoffer:any;
  i:any;
  local:any;
  a:any=0;
  length:any;
  j:any;
  getDate:any;
  getTime:any;
  formatNewTime:any;
  formatNewDate:any;

  formattedDate:any=[];
  offertime:any=[];

  constructor(private http:HttpClient){
    this.http.get<any>("http://localhost:3000/offers").subscribe(x=>{
    this.offer=x;
    this.length=x.length;
    for(this.i=0;this.i<x.length;this.i++){
      this.offertime[this.i]=x[this.i].time;
    }
    
    this.date=new Date();
    this.formatNewTime=this.date.getTime();
    this.formatNewDate=formatDate(this.formatNewTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
    // console.log(this.offertime[0]);
    // this.getDate=new Date(this.offertime[0]);
    // console.log(this.getDate);
    for(var j=0;j<this.offertime.length;j++){
      this.getDate=new Date(this.offertime[j]);
      this.getTime=this.getDate.getTime();
      this.formattedDate[j]=formatDate(this.getTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
    }

    console.log(this.formattedDate[0]>this.formatNewDate);
    // let offer={
    //   img: "../../assets/EV mart/offer1.jpg",
    //   content: "Get ₹5,000* off on the OLA S1 Pro!",
    //   time: "July 19 2023 13:17:00",
    //   link: "",
    //   validity: "We have always got your back! Watch out this offer, valid only for 19 June",
    //   button: "Order now"
    // }
    // this.http.post("http://localhost:3000/offers",offer).subscribe((x)=>{
    // console.log(x);
    // })
    // this.subscription=Subscription;
    // this.milliSecondsInASecond = 1000;
    // this.hoursInADay = 24;
    // this.minutesInAnHour = 60;
    // this.SecondsInAMinute  = 60;
    // console.log(this.Dday);
    // console.log(this.date);
    })
  }
  check(){
    console.log("works");
  }
  // getTimeDifference(){
  //   console.log(this.a);
  //   this.local=localStorage.getItem('offertime'+this.a);
  //   console.log(this.local);
  //   this.Dday=new Date(this.local+this.a);
  //   console.log(this.Dday);
  //   this.timeDifference=this.Dday.getTime()-new Date().getTime();
  //   this.allocateTime(this.timeDifference);
  // }

  // allocateTime(timeDifference:any){
  //       this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
  //       this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
  //       this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
  //       this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  //       this.checkdate(this.secondsToDday,this.minutesToDday,this.hoursToDday,this.daysToDday);
  // }

 
  // checkdate(sec:any,min:any,hours:any,day:any){
  //   if(sec==0 && min==0 && hours==0 && day==0){
  //     this.http.delete("http://localhost:3000/offers/1").subscribe(()=>{
  //       console.log("done");
  //       window.location.reload();
  //     })
  //   }
  //   else{
  //     if(this.a<this.length-1){
  //       console.log(this.a);
  //       this.a++;
  //     }
  //     console.log("not zero");
  //   }
  // }

  ngOnInit() {
    // this.subscription = interval(1000).subscribe(x =>
    //   {
    //      this.getTimeDifference();
    //   });
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
}
