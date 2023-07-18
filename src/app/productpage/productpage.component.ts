import { Component, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../admin.service';
import { OrderbookingService } from '../orderbooking.service';
import { LogincredentialsService } from '../logincredentials.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductpageComponent {
  vehdetails:any;
constructor(private vehservice:AdminService,private book:OrderbookingService,private login:LogincredentialsService){
  //count and display the vehicles of brand
  this.vehservice.countread().subscribe(data=>{
    this.vehdetails=data;
    console.log(this.vehdetails);
  })
}

//redirect the particular brand varient with information
order(order:any){
  this.book.productpage(order);
}
}
