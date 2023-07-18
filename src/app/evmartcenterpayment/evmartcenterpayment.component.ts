import { Component } from '@angular/core';

@Component({
  selector: 'app-evmartcenterpayment',
  templateUrl: './evmartcenterpayment.component.html',
  styleUrls: ['./evmartcenterpayment.component.css']
})
export class EvmartcenterpaymentComponent {
  orderedVehicleImage:any;
  orderedVehicleName:any;
  uniqueCode:any="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  randomCode:any="";

  constructor(){
    this.orderedVehicleImage=sessionStorage.getItem('varient_image');
    this.orderedVehicleName=sessionStorage.getItem('varient_name');
   
    //generation of random code for the order payment at EV Mart center
    for(var i=0;i<5;i++){
      const randomCode=Math.floor(Math.random()*this.uniqueCode.length);
      const randomIndex=this.uniqueCode.charAt(randomCode);
      this.randomCode=this.randomCode+randomIndex;
      console.log(this.randomCode);
    }
  }

}
