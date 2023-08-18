import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription,interval } from 'rxjs';
import { OrderbookingService } from '../orderbooking.service';
import { url } from 'src/Environment/environment';
import { LoggerService } from '../logger.service';

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

  constructor(private _http:HttpClient,private route:Router,private offerBooking:OrderbookingService,private logger:LoggerService){
    this._http.get<any>(url.offers).subscribe(x=>{
    this.offer=x;
    this.length=x.length;
    for(this.i=0;this.i<x.length;this.i++){
      this.offertime[this.i]=x[this.i].time;
    }

    this.date=new Date();
    this.formatNewTime=this.date.getTime();
    this.formatNewDate=formatDate(this.formatNewTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
    for(var j=0;j<this.offertime.length;j++){
      this.getDate=new Date(this.offertime[j]);
      this.getTime=this.getDate.getTime();
      this.formattedDate[j]=formatDate(this.getTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
      console.log(this.formattedDate);
    }


        setInterval(()=>{
        this._http.get(url.offers).subscribe((offers)=>{
          this.offerTime=offers;
          const offer=this.offerTime.find((findTime:any)=>{
          this.regemailID=findTime.regemail;
          this.finddate=new Date(findTime.time);
          this.finddateTime=this.finddate.getTime();
          this.formatFindTime=formatDate(this.finddateTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
          this.date=new Date();
          this.formatNewTime=this.date.getTime();
          this.formatNewDate=formatDate(this.formatNewTime,'dd-MMM-yyyy hh:MM:ss a','en-US','+0530');
          return this.finddateTime<this.formatNewTime;
        });
        if(offer){
          this._http.delete("http://localhost:3000/offers/"+this.regemailID).subscribe((deleteoffer)=>{
        window.location.reload();
        });
        }
        })
      },1000)


    })
  }
  check(){
    this.logger.info("works");
  }

  orderNow(brandname:any){
    this.offerBooking.productpage(brandname);
  }


  ngOnInit(): void {
    this.logger.info("Offer page Component initialized..");
  }

}
