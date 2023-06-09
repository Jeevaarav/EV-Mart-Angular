import { Component } from '@angular/core';
import { CarddetailsService } from '../carddetails.service';

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
    
    constructor(private upidetails:CarddetailsService){
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
    showButton(index:any){
      this.hideUPI[index]=false;
      this.showProceed[index]=true;
    }
    closeButton(index:any){
      this.hideUPI[index]=true;
      this.showProceed[index]=false;
    }
} 
