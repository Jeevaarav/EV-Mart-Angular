import { Component } from '@angular/core';
import { CarddetailsService } from '../carddetails.service';
import { FillbookdetailsService } from '../fillbookdetails.service';

@Component({
  selector: 'app-walletdetails',
  templateUrl: './walletdetails.component.html',
  styleUrls: ['./walletdetails.component.css']
})
export class WalletdetailsComponent {
  orderedVehicleImage:any;
    orderedVehicleName:any;
    hideUPI:Boolean[]=[];
    showProceed:Boolean[]=[false];
    getPaymentDetails:any;
    phoneNumber:any;
    Amount:any;

    constructor(private upidetails:CarddetailsService,private orderDetails:FillbookdetailsService){
      //set the available payment mode
      this.Amount=sessionStorage.getItem("Amount");
      this.orderedVehicleImage=sessionStorage.getItem('varient_image');
      this.orderedVehicleName=sessionStorage.getItem('varient_name');
      this.upidetails.getPaymentupi().subscribe((getPaymentupi)=>{
        this.getPaymentDetails=getPaymentupi;
        this.phoneNumber=sessionStorage.getItem('regphone');
        console.log(this.getPaymentDetails.length);
        for(var i=0;i<this.getPaymentDetails.length;i++){
          this.hideUPI[i]=true;
        }
      })
    }

    //hide and show UPI
    showButton(index:any){
      this.hideUPI[index]=false;
      this.showProceed[index]=true;
    }

    //hide and show UPI
    closeButton(index:any){
      this.hideUPI[index]=true;
      this.showProceed[index]=false;
    }

    //payment type
    paymentUPI(paymentname:any){
      this.orderDetails.orderbooked("UPI");
      sessionStorage.setItem('UPI',paymentname);
    }
}
