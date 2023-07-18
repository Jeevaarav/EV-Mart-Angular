import { Component } from '@angular/core';
import { LogincredentialsService } from '../logincredentials.service';

@Component({
  selector: 'app-userpastorders',
  templateUrl: './userpastorders.component.html',
  styleUrls: ['./userpastorders.component.css']
})
export class UserpastordersComponent {
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
        this.pastOrdersCount=this.userPastOrders.ordered.length;
        this.showPastOrders=this.userPastOrders.ordered;
        // this.showOrder=this.userPastOrders.ordered;
          console.log(this.userPastOrders.ordered);
      }
    })
  }

    //view particular order billing
  viewOrderDetails(index:any){
    this.showOrderDetails=true;
    this.showOrder=this.userPastOrders.ordered[index];
    console.log(this.showOrder);
  }

    //view and hide
  showOrderbooked(){
    this.showOrderDetails=false;
  }
}
