import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profilepaymentdetails',
  templateUrl: './profilepaymentdetails.component.html',
  styleUrls: ['./profilepaymentdetails.component.css']
})
export class ProfilepaymentdetailsComponent {
  hideNoPaymentcard:Boolean=true;
  getUserDetails:any;
  cardTypeIcon:any;
  showPaymentCard:Boolean=true;
  showCardHolder:any;
  showCardNumber:any;
  

  constructor(private _http:HttpClient){
    this._http.get<any>("http://localhost:3000/Register").subscribe((paymentcard)=>{
      const user=paymentcard.find((register:any)=>{
        this.getUserDetails=register;
        return register.regemail==sessionStorage.getItem("logmail");
      })
      if(user){
        if(this.getUserDetails.paymentcard!=null){
          this.hideNoPaymentcard=false;
          this.showCardNumber=this.getUserDetails.paymentcard.cardnumber;
          this.showCardHolder=this.getUserDetails.paymentcard.cardholdername;
          console.log(this.hideNoPaymentcard);
          console.log(this.getUserDetails.paymentcard.cardtype);
          if(this.getUserDetails.paymentcard.cardtype=="Visa"){
            this.cardTypeIcon="fa-brands fa-cc-visa"
          }
          else{
            this.cardTypeIcon="fa-brands fa-cc-mastercard";
          }
        }
        else{
          this.hideNoPaymentcard=false;
        }
      }
      else{
        console.log('Not Found');
      }
    })
  }
}
