import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FillbookdetailsService {

  date:any;
  day:any;
  getday:any;
  orderformattime:any;
  timetaken:any;
  getFullDetails:any;
  getOrder:any;
  orderplaced:any;
  getFillDetails:any;
  parseDetails:any;
  stringDetails:any;
  orderDetails:any;
  stringifyOrderDetails:any;
  orderDate:any;
  bookingDate:any;
  getTime:any;

  constructor(private http:HttpClient,private route:Router) { }


  stateDisplay(){
    return this.http.get<any>("http://localhost:3000/states")
  }

  storeDetails(filldetails:any){
    this.stringDetails=JSON.stringify(filldetails);
    sessionStorage.setItem('filldetails',this.stringDetails);
    this.route.navigateByUrl('/payment').then(()=>{
      location.reload();
    });
  }

  orderbooked(paymentMode:any){
    this.getFillDetails=sessionStorage.getItem('filldetails');
    this.parseDetails=JSON.parse(this.getFillDetails);
    this.orderDate=new Date();
    this.getTime=this.orderDate.getTime();

    this.bookingDate=formatDate(this.getTime,'dd-MMM-yyyy hh:mm:ss a','en-US','+0530');

    if(paymentMode=="Debit Card"){
      this.orderDetails={
      orderid:this.parseDetails.orderid,
      varientcolor:this.parseDetails.varientcolor,
      varientimg:this.parseDetails.varientimg,
      varientname:this.parseDetails.varientname,
      battery:this.parseDetails.battery,
      range:this.parseDetails.range,
      topspeed:this.parseDetails.topspeed,
      price:this.parseDetails.price,
      bookingdate:this.bookingDate,
      day:this.parseDetails.day,
      State:this.parseDetails.State,
      City:this.parseDetails.City,
      Centername:this.parseDetails.Centername,
      mail:this.parseDetails.mail,
      address:this.parseDetails.address,
      firstname:this.parseDetails.firstname,
      lastname:this.parseDetails.lastname,
      phonenumber:this.parseDetails.phonenumber,
      landmark:this.parseDetails.landmark,
      pincode:this.parseDetails.pincode,
      doorno:this.parseDetails.doorno,
      paymentmode:"Debit Card",
      paymentstatus:"paid"
      }

      this.stringifyOrderDetails=JSON.stringify(this.orderDetails);
      this.http.get<any>("http://localhost:3000/Register").subscribe((x)=>{
      const user=x.find((logged:any)=>{
        this.getFullDetails=logged;
        return logged.regemail==sessionStorage.getItem('logmail');
      });
      if(user){
        this.getOrder=this.getFullDetails.orders;
        console.log(this.getOrder);
        if(this.getFullDetails.orders!=null){
          this.getOrder.push(this.orderDetails);
          this.http.patch("http://localhost:3000/Register/"+this.orderDetails.mail,{orders:this.getOrder}).subscribe((z)=>{
          console.log(z);
          this.route.navigateByUrl("orderconfirmpage");
          // setTimeout(()=>{
          //   this.orderplaced=false;
          // },4000)
        });
        }
        else{
          alert("check patched first");
        this.http.patch("http://localhost:3000/Register/"+this.orderDetails.mail,{orders:[this.orderDetails]}).subscribe((patched)=>{
          console.log("patched");
          this.route.navigateByUrl("orderconfirmpage");
          // this.orderplaced=true;
          // setTimeout(()=>{
          //     this.route.navigateByUrl('Product');
          // },4000)
        })
      }
      }
    });
    }
  }
}
