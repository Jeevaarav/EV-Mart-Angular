import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profiledeliveredorders',
  templateUrl: './profiledeliveredorders.component.html',
  styleUrls: ['./profiledeliveredorders.component.css']
})
export class ProfiledeliveredordersComponent {
  userDeliveredOrders:any;
  showDeliveredOrders:any;
  showOrder:any;
  deliveryOrdersCount:any;

  showOrderDetails:Boolean=false;

  constructor(private _http:HttpClient){
    this._http.get<any>("http://localhost:3000/Register").subscribe((deliveredOrders)=>{
      //retriving delivered details
      const user=deliveredOrders.find((delivered:any)=>{
        this.userDeliveredOrders=delivered;
        return delivered.regemail==sessionStorage.getItem('logmail');
      })
      console.log(deliveredOrders.deliveredOrders);
      this.showDeliveredOrders=this.userDeliveredOrders.deliveredOrders;
      this.deliveryOrdersCount=this.showDeliveredOrders.length;
    })
  }

  //view the parcular order billing
  viewOrderDetails(index:any){
    this.showOrderDetails=true;
    this.showOrder=this.userDeliveredOrders.deliveredOrders[index];
    console.log(this.showOrder);
  }

  //used for hiding and showing
  showOrderbooked(){
    this.showOrderDetails=false;
  }

}
