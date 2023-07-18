import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription,interval } from 'rxjs';
import { LogincredentialsService } from '../logincredentials.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnChanges {
  orderdetails:any;
  i:any;
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
  showoffer:any;
  local:any;
  a:any=0;
  length:any;
  j:any;
  getFullDetails:any;
  canceldetails:any;
  usemail:any;
  pastOrders:any; 
  orderprint:any;
  showOrder:any;
  dummyTime:any;
  dummySliceTime:any;

  pastOrderHeading:Boolean=true;
  viewmorebtn:Boolean=true;
  userNewOrders:Boolean=true;
  viewmorenew:Boolean=true;
  viewDeliverybtn:Boolean=true;
  showPastOrders:Boolean=true;
  deliveryOrders:Boolean=true;
  showDeliveryOrders:Boolean=true;
  showOrderDetails:Boolean=false;
  NewOrdersExit:Boolean=true;
  arrivalOn:Boolean=false;
  deliveredOn:Boolean=true;
  limited:boolean=false;
  cancel:Boolean=true;
  ordersEmpty:Boolean=true;
  ordersBooked:Boolean=false;

  getOrder:any=[];
  newOrders:any=[];
  getDeliveryOrders:any=[];

  constructor(private http:HttpClient,private userDetails:LogincredentialsService,private changes:ChangeDetectorRef){
    this.subscription=Subscription;
    this.date=new Date();
    this.milliSecondsInASecond = 1000;
    this.hoursInADay = 24;
    this.minutesInAnHour = 60;
    this.SecondsInAMinute  = 60;

    //userorder details
    this.userDetails.registerDetails().subscribe((x)=>{
      const user=x.find((logged:any)=>{
        this.orderdetails=logged;
        return logged.regemail==sessionStorage.getItem('logmail');
      });
      if(user){
        if(this.orderdetails.ordered || this.orderdetails.orders || this.orderdetails.deliveredOrders){
          // -----------------use try catch here------------------------
          if(this.orderdetails.orders.length>0){
            console.log("inside orders");
            this.viewmorenew=true;
            this.ordersEmpty=false;
            this.deliveryOrders=false;
            this.viewDeliverybtn=false;
            this.ordersBooked=true;
            this.pastOrderHeading=false; 
            this.viewmorebtn=false;
            this.showPastOrders=false;
            this.userNewOrders=true;
            if(this.orderdetails.orders.length==1){
              console.log("enter in inside");
              for(var i=0;i<1;i++){
                console.log(this.orderdetails.orders);
                this.newOrders[i]=this.orderdetails.orders[i];
              }
            }
            else{
              for(var i=0;i<2;i++){
                console.log(this.orderdetails.orders[i]);
                this.newOrders[i]=this.orderdetails.orders[i];
              }
            }
          }
          else if(this.orderdetails.ordered.length>0){
            if(this.orderdetails.ordered.length>0){
            this.viewmorenew=false;
          this.pastOrderHeading=true; 
          this.viewmorebtn=true;
          this.ordersEmpty=false;
          this.userNewOrders=false;
          this.ordersBooked=false;
          this.showPastOrders=true;
          this.deliveryOrders=false;
          this.viewDeliverybtn=false;
          if(this.orderdetails.ordered.length==1){
            for(var i=0;i<1;i++){
              this.getOrder[i]=this.orderdetails.ordered[i];
            }
          }
          else{
          for(this.i=0;this.i<2;this.i++){
          console.log(this.orderdetails.ordered.length);
          this.getOrder[this.i]=this.orderdetails.ordered[this.i];
          console.log(this.getOrder[this.i].varientimg);
          }
        }
      }
        }
        else if(this.orderdetails.deliveredOrders.length>0){
          if(this.orderdetails.deliveredOrders.length>0){
          this.showDeliveryOrders=true;
          this.viewmorenew=false;
          this.pastOrderHeading=false; 
          this.viewmorebtn=false;
          this.ordersEmpty=false;
          this.userNewOrders=false;
          this.ordersBooked=false;
          this.showPastOrders=false
          if(this.orderdetails.deliveredOrders.length==1){
            for(var i=0;i<1;i++){
              this.getDeliveryOrders[i]=this.orderdetails.deliveredOrders[i];
            }
          }
          else{
            for(var j=0;j<2;j++){
              this.getDeliveryOrders[j]=this.orderdetails.deliveredOrders[j];
            }
          }
          this.pastOrderHeading=false; 
          this.viewmorebtn=false;
          this.userNewOrders=false;
        }
        }
        else{
          this.pastOrderHeading=false; 
          this.viewmorebtn=false;
          this.userNewOrders=false;
          this.deliveryOrders=false;
          this.viewmorenew=false;
          this.viewDeliverybtn=false;

        }
          
        }
        else{
            this.ordersBooked=false;
            this.showPastOrders=false;
        }
      }

      
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    //reload if any changes in array length
    if(changes[this.orderdetails]){
      window.location.reload();
    }
  }

//show the delivered orders information
viewOrderDetails(index:any){
  this.showOrderDetails=true;
  this.showOrder=this.orderdetails.deliveredOrders[index];
  console.log(this.showOrder);
}

//show the past order details
viewPastOrderDetails(index:any){
  this.showOrderDetails=true;
  this.showOrder=this.orderdetails.ordered[index];
  console.log(this.showOrder);
  this.deliveredOn=false;
  this.arrivalOn=true;
}

//show the new order details
viewNewOrderDetails(index:any){
  this.showOrderDetails=true;
  this.showOrder=this.orderdetails.orders[index];
  console.log(this.showOrder);
  this.NewOrdersExit=false;
}

//used for hide and show
showOrderbooked(){
  this.showOrderDetails=false;
}

//cancel the order within the time
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

