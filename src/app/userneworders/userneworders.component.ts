import { Component } from '@angular/core';
import { LogincredentialsService } from '../logincredentials.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userneworders',
  templateUrl: './userneworders.component.html',
  styleUrls: ['./userneworders.component.css']
})
export class UsernewordersComponent {
  userPastOrders:any;
  pastOrdersCount:any;
  showOrder:any;
  showPastOrders:any;
  deliveredDate:any;
  orderedDate:any;
  orderDetails:any;
  customerDetails:any;
  getEmail:any;
  email:any;
  cancelOrdermail:any;


  getCancelDate:any=[];

  showOrderDetails:Boolean=false;


  constructor(private _pastOrders:LogincredentialsService,private _http:HttpClient){
    this._pastOrders.registerDetails().subscribe((pastOrders)=>{
      const userOrders=pastOrders.find((oldOrders:any)=>{
        this.userPastOrders=oldOrders;
        return oldOrders.regemail==sessionStorage.getItem("logmail");
      })
      if(userOrders){
        this.pastOrdersCount=this.userPastOrders.orders.length;
        this.showPastOrders=this.userPastOrders.orders;
        for(var i=0;i<this.userPastOrders.orderedDate.length;i++){
          this.getCancelDate[i]=this.userPastOrders.orderedDate[i];
        }
        
        // this.showOrder=this.userPastOrders.ordered;
          console.log(this.userPastOrders.orders);
      }
    })
  }

  //view particular order billing
  viewOrderDetails(index:any){
    this.showOrderDetails=true;
    this.showOrder=this.userPastOrders.orders[index];
    console.log(this.showOrder);
  }

    //view and hide
  showOrderbooked(){
    this.showOrderDetails=false;
  }

  //cancel the order
  cancelorder(index:any){
    this.email = sessionStorage.getItem('profilepage');
    this.getEmail = JSON.parse(this.email);
    this._http.get("http://localhost:3000/Register/"+this.getEmail.regemail).subscribe(x=>{
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
      this._http.patch("http://localhost:3000/Register/"+this.customerDetails.regemail,{orders:this.orderDetails,orderedDate:this.orderedDate,deliveredDate:this.deliveredDate}).subscribe(x=>{
        this.sendEmail("http://localhost:4000/cancelorder",this.cancelOrdermail).subscribe((mailinfo:any)=>{
          let res:any=mailinfo;
          });
        console.log(x);
      });
    })
    
  }
  sendEmail(url:any,data:any){
    console.log(url);
    return this._http.post(url,data);
  }
}
