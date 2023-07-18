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
    showSaved:Boolean=false;
    linkedAccount:Boolean=true;

    constructor(private _http:HttpClient){
      this.orderedVehicleImage=sessionStorage.getItem('varient_image');
      this.orderedVehicleName=sessionStorage.getItem('varient_name');
      this.totalPayamount=sessionStorage.getItem('Amount');

      //used for displaying the card if registered by the user.
      this._http.get<any>("http://localhost:3000/Register").subscribe((register)=>{
        const user=register.find((check:any)=>{
          this.getDebitCardNumber=check;
          return check.regemail==sessionStorage.getItem("logmail");
        })
        if(user){
          if(this.getDebitCardNumber.paymentcard.length!=null){
            console.log(this.getDebitCardNumber.paymentcard[0].cardnumber);
            this.linkedAccount=false;
            this.showSaved=true;
          this.displayCardDetails=this.getDebitCardNumber.paymentcard[0].cardtype;
          this.displayCardNumber=this.getDebitCardNumber.paymentcard[0].cardnumber;
          this.displayCardHolder=this.getDebitCardNumber.paymentcard[0].cardholdername;

          if(this.displayCardDetails=="Visa"){
            this.cardTypeIcon="fa-brands fa-cc-visa";
          }
          else{
            this.cardTypeIcon="fa-brands fa-cc-mastercard";
          }
          console.log(this.cardTypeIcon);
          }
          else{
            this.linkedAccount=true;
            this.showSaved=false;
          }
        }
      })
    }

    //these blocks are used for hide and show the details
    showSavedCard(){
      this.showPaymentCard=true;
    }
    closeDebit(){
      this.showPaymentCard=false;
    }
}
