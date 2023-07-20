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
  customerDetails:any;
  pastOrders:any; 
  orderprint:any;
  showOrder:any;
  dummyTime:any;
  email:any;
  dummySliceTime:any;
  getEmail:any;
  orderDetails:any;
  cancelOrdermail:any;
  deliveredDate:any;
  orderedDate:any;

  pastOrderHeading:Boolean=false;
  viewmorebtn:Boolean=false;
  userNewOrders:Boolean=false;
  viewmorenew:Boolean=false;
  viewDeliverybtn:Boolean=false;
  showPastOrders:Boolean=true;
  deliveryOrders:Boolean=false;
  showDeliveryOrders:Boolean=true;
  showOrderDetails:Boolean=false;
  NewOrdersExit:Boolean=true;
  arrivalOn:Boolean=false;
  deliveredOn:Boolean=true;
  limited:boolean=false;
  cancel:Boolean=false;
  ordersEmpty:Boolean=true;
  ordersBooked:Boolean=false;

  getOrder:any=[];
  newOrders:any=[];
  getDeliveryOrders:any=[];
  getCancelDate:any=[];

  constructor(private http:HttpClient,private userDetails:LogincredentialsService,private changes:ChangeDetectorRef){
    this.subscription=Subscription;
    this.date=new Date();
    this.milliSecondsInASecond = 1000;
    this.hoursInADay = 24;
    this.minutesInAnHour = 60;
    this.SecondsInAMinute  = 60;

    setInterval(()=>{
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
        this.cancel=true;
        if(this.orderdetails.orders.length==1){
          console.log("enter in inside");
          for(var i=0;i<1;i++){
            console.log(this.orderdetails.orders);
            this.newOrders[i]=this.orderdetails.orders[i];
            this.getCancelDate[i]=this.orderdetails.orderedDate[i];
          }
        }
        else{
          for(var i=0;i<2;i++){
            console.log(this.orderdetails.orders[i]);
            this.newOrders[i]=this.orderdetails.orders[i];
             this.getCancelDate[i]=this.orderdetails.orderedDate[i];
          }
        }
      }
      else if(this.orderdetails.ordered.length>0){
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
     else if(this.orderdetails.deliveredOrders.length>0){
      this.showDeliveryOrders=true;
      this.viewmorenew=false;
      this.pastOrderHeading=false; 
      this.viewmorebtn=false;
      this.ordersEmpty=false;
      this.userNewOrders=false;
      this.ordersBooked=false;
      this.showPastOrders=false;
      this.deliveryOrders=true;

      this.viewDeliverybtn=true;
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
        this.ordersBooked=false;
        this.showPastOrders=false;
    }
  }

  
});
    },1000)
   
  }


  ngOnChanges(changes: SimpleChanges) {
    //reload if any changes in array length
    if(changes[this.orderdetails.orders]){
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
    this.email = sessionStorage.getItem('profilepage');
    this.getEmail = JSON.parse(this.email);
    this.http.get("http://localhost:3000/Register/"+this.getEmail.regemail).subscribe(x=>{
      this.customerDetails=x;
      this.orderDetails=this.customerDetails.orders;
      this.orderedDate=this.customerDetails.orderedDate;
      this.deliveredDate=this.customerDetails.deliveredDate;

      this.cancelOrdermail={
        orderid:this.customerDetails.orders[index].orderid,
        varientname:this.customerDetails.orders[index].varientname,
        price:this.customerDetails.orders[index].price,
        bookingdate:this.customerDetails.orders[index].bookingdate,
        onlinepaidamount:this.customerDetails.orders[index].onlinepaidamount,
        mail:this.customerDetails.orders[index].mail,
        firstname:this.customerDetails.orders[index].firstname,
        lastname:this.customerDetails.orders[index].lastname
        }
      this.orderDetails.splice(index,1);
      this.orderedDate.splice(index,1);
      this.deliveredDate.splice(index,1);
      this.http.patch("http://localhost:3000/Register/"+this.customerDetails.regemail,{orders:this.orderDetails,orderedDate:this.orderedDate,deliveredDate:this.deliveredDate}).subscribe(x=>{
        this.sendEmail("http://localhost:4000/cancelorder",this.cancelOrdermail).subscribe((mailinfo:any)=>{
          let res:any=mailinfo;
          });
      console.log(x);
      });
    })
    
  }
  sendEmail(url:any,data:any){
    console.log(url);
    return this.http.post(url,data);
  }
  
}

