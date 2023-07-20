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
  offerTime:any;
  regemailID:any;
  finddate:any;
  finddateTime:any;
  formatFindTime:any;

  formattedDate:any=[];
  offertime:any=[];

  constructor(private _http:HttpClient){
    this._http.get<any>("http://localhost:3000/offers").subscribe(x=>{
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

      console.log(this.formattedDate[j]<this.formatNewDate);
      console.log(this.formattedDate)

        console.log(this.formattedDate[j]);

        setInterval(()=>{
        this._http.get("http://localhost:3000/offers").subscribe((offers)=>{
          this.offerTime=offers;
          const offer=this.offerTime.find((findTime:any)=>{
          this.regemailID=findTime.regemail;
          this.finddate=new Date(findTime.time);
          this.finddateTime=this.finddate.getTime();
          this.formatFindTime=formatDate(this.finddateTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
          this.date=new Date();
          this.formatNewTime=this.date.getTime();
          this.formatNewDate=formatDate(this.formatNewTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
          console.log(this.formatFindTime);
          console.log(this.formatNewDate);
          return this.finddateTime<this.formatNewTime;
        });
        if(offer){
          console.log(offer);
          this._http.delete("http://localhost:3000/offers/"+this.regemailID).subscribe((deleteoffer)=>{
        console.log("deleteoffer");
        window.location.reload();
        });
        }
        })
      },1000)




    console.log(this.formattedDate[0]>this.formatNewDate);

    })
  }
  check(){
    console.log("works");
  }


  ngOnInit() {

  }

}
