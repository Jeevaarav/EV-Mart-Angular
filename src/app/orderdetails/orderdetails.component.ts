import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,interval } from 'rxjs';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
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
  ordersEmpty:Boolean=true;
  ordersBooked:Boolean=false;
  pastOrders:any;

  dummyTime:any;
  dummySliceTime:any;
  showPastOrders:Boolean=true;

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
        if(this.orderdetails.ordered || this.orderdetails.orders){
          if(this.orderdetails.orders.length>0){
            this.pastOrders=this.orderdetails.orders;
            this.ordersEmpty=false;
            this.showPastOrders=true;
          }
          if(this.orderdetails.ordered){
          this.ordersEmpty=false;
          this.ordersBooked=true;
          for(this.i=0;this.i<this.orderdetails.ordered.length;this.i++){
          console.log(this.orderdetails.ordered.length);
          this.getOrder[this.i]=this.orderdetails.ordered[this.i];
          console.log(this.getOrder[this.i].varientimg);
          }
        }
          
        }
        else{
          if(this.orderdetails.orders.length>0){
            
          }
          else{ 
            this.ordersBooked=false;
            this.showPastOrders=false;
          }
         
        }
      }
      
    });
  }

  // getTimeDifference(){
  //   // console.log(this.a);
  //   this.local=localStorage.getItem('offertime'+this.a);
  //   // console.log(this.local);
  //   console.log(this.getOrder[1].bookingdate);
  //   this.dummyTime=this.getOrder[1].bookingdate;
  //   this.dummySliceTime=this.dummyTime.slice(12,17);
  //   console.log(this.dummySliceTime);
  //   this.Dday=new Date('10-Jul-2023 01:9 PM');
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
      
  //   }
  //   else{
  //     // if(this.a<this.length-1){
  //     //   console.log(this.a);
  //     //   this.a++;
  //     // }
  //     console.log("not zero");
  //   }

  // ngOnInit() {
  //   this.subscription = interval(1000).subscribe(x =>
  //     {
  //        this.getTimeDifference();
  //     });
  // }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

  cancelorder(index:any){
    this.http.get<any>("http://localhost:3000/Register").subscribe((x)=>{
      const user=x.find((logged:any)=>{
        // console.log(logged.order);
        this.canceldetails=logged.orders[index].orderid;
        this.usemail=logged.regemail;
        this.getFullDetails=logged;
        return logged.regemail==sessionStorage.getItem('logmail');
      });
      if(user){
        if(this.getFullDetails.orders.length){
          this.getFullDetails=this.getFullDetails.orders;
          console.log(this.getFullDetails);
          console.log(this.getFullDetails.splice(index,1));
          const details=this.getFullDetails;
          this.http.patch("http://localhost:3000/Register/"+this.usemail,{orders:details}).subscribe((done)=>{
            console.log("patch done");
          })
        }
      }
    })
  }
}

