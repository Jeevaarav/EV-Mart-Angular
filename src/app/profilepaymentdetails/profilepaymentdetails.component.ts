import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { url } from 'src/Environment/environment';

@Component({
  selector: 'app-profilepaymentdetails',
  templateUrl: './profilepaymentdetails.component.html',
  styleUrls: ['./profilepaymentdetails.component.css']
})
export class ProfilepaymentdetailsComponent {
  getUserDetails:any;
  cardTypeIcon:any;
  showCardHolder:any;
  showCardNumber:any;

  hideNoPaymentcard:Boolean=true;
  showPaymentCard:Boolean=true;


  constructor(private _http:HttpClient){
    //retreive card details from particular user
    this._http.get<any>(url.customerDetails).subscribe((paymentcard)=>{
      const user=paymentcard.find((register:any)=>{
        this.getUserDetails=register;
        return register.regemail==sessionStorage.getItem("logmail");
      })
      if(user){
        if(this.getUserDetails.paymentcard!=null){
          this.hideNoPaymentcard=false;
          this.showCardNumber=this.getUserDetails.paymentcard[0].cardnumber;
          this.showCardHolder=this.getUserDetails.paymentcard[0].cardholdername;
          console.log(this.getUserDetails.paymentcard[0].cardtype);
          if(this.getUserDetails.paymentcard[0].cardtype=="Visa"){
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

  // deleteSavedCard(){
  //     this._http.delete("http://localhost:3000/Register/"+sessionStorage.getItem('logmail')).subscribe(()=>{

  //     })
  // }
}
