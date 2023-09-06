import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { url } from 'src/environments/environment';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
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

    constructor(private _http:HttpClient,private logger:LoggerService){
      this.orderedVehicleImage=sessionStorage.getItem('varient_image');
      this.orderedVehicleName=sessionStorage.getItem('varient_name');
      this.totalPayamount=sessionStorage.getItem('Amount');

      //used for displaying the card if registered by the user.
      this._http.get<any>(url.customerDetails).subscribe((register)=>{
        const user=register.find((check:any)=>{
          this.getDebitCardNumber=check;
          return check.regemail==sessionStorage.getItem("logmail");
        })
        if(user){
          if(this.getDebitCardNumber.paymentcard.length!=null){
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

    ngOnInit(): void {
      this.logger.info("Paymentpage component initialized..");
    }
}
