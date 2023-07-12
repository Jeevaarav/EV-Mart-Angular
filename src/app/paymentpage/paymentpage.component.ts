import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent {
    orderedVehicleImage:any;
    orderedVehicleName:any;
    totalPayamount:any;
    totalPayable:any;
    getCarddetails:any;
    getDebitCardNumber:any;
    displayCardDetails:any;
    cardTypeIcon:any;
    displayCardNumber:any;
    displayCardHolder:any;
    showPaymentCard:Boolean=false;

    constructor(private _http:HttpClient){
      this.orderedVehicleImage=sessionStorage.getItem('varient_image');
      this.orderedVehicleName=sessionStorage.getItem('varient_name');
      this.totalPayamount=sessionStorage.getItem('Amount');

      this._http.get<any>("http://localhost:3000/Register").subscribe((register)=>{
        const user=register.find((check:any)=>{
          this.getDebitCardNumber=check;
          return check.regemail==sessionStorage.getItem("logmail");
        })
        if(user){
          this.displayCardDetails=this.getDebitCardNumber.paymentcard.cardtype;
          this.displayCardNumber=this.getDebitCardNumber.paymentcard.cardnumber;
          this.displayCardHolder=this.getDebitCardNumber.paymentcard.cardholdername;

          if(this.displayCardDetails=="Visa"){
            this.cardTypeIcon="fa-brands fa-cc-visa";
          }
          else{
            this.cardTypeIcon="fa-brands fa-cc-mastercard";
          }
          console.log(this.cardTypeIcon);
        }
      })
    }
    showSavedCard(){
      this.showPaymentCard=true;
    }
    closeDebit(){
      this.showPaymentCard=false;
    }
}
