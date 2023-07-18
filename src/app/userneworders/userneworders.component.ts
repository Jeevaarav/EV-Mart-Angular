import { Component } from '@angular/core';
import { LogincredentialsService } from '../logincredentials.service';

@Component({
  selector: 'app-userneworders',
  templateUrl: './userneworders.component.html',
  styleUrls: ['./userneworders.component.css']
})
export class UsernewordersComponent {
  userPastOrders:any;
  pastOrdersCount:any;
  showOrder:any;
  showOrderDetails:Boolean=false;
  showPastOrders:any;

  constructor(private _pastOrders:LogincredentialsService){
    this._pastOrders.registerDetails().subscribe((pastOrders)=>{
      const userOrders=pastOrders.find((oldOrders:any)=>{
        this.userPastOrders=oldOrders;
        return oldOrders.regemail==sessionStorage.getItem("logmail");
      })
      if(userOrders){
        this.pastOrdersCount=this.userPastOrders.orders.length;
        this.showPastOrders=this.userPastOrders.orders;
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
}
