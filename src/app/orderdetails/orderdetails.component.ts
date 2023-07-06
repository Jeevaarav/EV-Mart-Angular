import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,interval } from 'rxjs';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit,OnDestroy {
  orderdetails:any;
  getOrder:any=[];
  i:any;
  cancel:Boolean=true;
  date:any;
  Dday:any;
  milliSecondsInASecond:any;
  hoursInADay:any;
  minutesInAnHour:any;
  SecondsInAMinute:any;
  timeDifference:any;
  subscription:any;
  secondsToDday:any; minutesToDday:any; hoursToDday:any; daysToDday:any;
  offertime:any;
  limited:boolean=false;
  showoffer:any;
  local:any;
  a:any=0;
  length:any;
  j:any;
  getFullDetails:any;
  canceldetails:any;
  usemail:any;
  constructor(private http:HttpClient){

    this.subscription=Subscription;
    this.date=new Date();
    this.milliSecondsInASecond = 1000;
    this.hoursInADay = 24;
    this.minutesInAnHour = 60;
    this.SecondsInAMinute  = 60;

    this.http.get<any>("http://localhost:3000/Register").subscribe((x)=>{
      const user=x.find((logged:any)=>{
        this.orderdetails=logged;
        // console.log(this.orderdetails.order);
        return logged.regemail==sessionStorage.getItem('logmail');
      });
      if(user){
        if(this.orderdetails.order){
          for(this.i=0;this.i<this.orderdetails.order.length;this.i++){
            console.log(this.orderdetails.order.length);
          this.getOrder[this.i]=this.orderdetails.order[this.i];
          console.log(this.getOrder[this.i].varientimg);
          }
        }
      }
    });
  }

  getTimeDifference(){
    console.log(this.a);
    this.local=localStorage.getItem('offertime'+this.a);
    console.log(this.local);
    this.Dday=new Date();
    console.log(this.Dday);
    this.timeDifference=this.Dday.getTime()-new Date().getTime();
    this.allocateTime(this.timeDifference);
  }

  allocateTime(timeDifference:any){
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
        this.checkdate(this.secondsToDday,this.minutesToDday,this.hoursToDday,this.daysToDday);
  }
  checkdate(sec:any,min:any,hours:any,day:any){
    if(sec==0 && min==0 && hours==0 && day==0){
      
    }
    else{
      // if(this.a<this.length-1){
      //   console.log(this.a);
      //   this.a++;
      // }
      console.log("not zero");
    }
  }

  ngOnInit() {
    this.subscription = interval(1000).subscribe(x =>
      {
         this.getTimeDifference();
      });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  cancelorder(index:any){
    this.http.get<any>("http://localhost:3000/Register").subscribe((x)=>{
      const user=x.find((logged:any)=>{
        // console.log(logged.order);
        this.canceldetails=logged.order[index].orderID;
        this.usemail=logged.regemail;
        this.getFullDetails=logged;
        return logged.regemail==sessionStorage.getItem('logmail');
      });
      if(user){
        this.getFullDetails=this.getFullDetails.order;
        console.log(this.getFullDetails);
        console.log(this.getFullDetails.splice(index,1));
        const details=this.getFullDetails;
        this.http.patch("http://localhost:3000/Register/"+this.usemail,{order:details}).subscribe((done)=>{
          console.log("patch done");
        })
      }
    })
  }


}
