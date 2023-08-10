import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OrderbookingService } from '../orderbooking.service';
import { LogincredentialsService } from '../logincredentials.service';
import { LoggerService } from '../logger.service';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  vehdetails:any;
constructor(private vehservice:AdminService,private book:OrderbookingService,private login:LogincredentialsService,private logger:LoggerService){
  //count and display the vehicles of brand
  this.vehservice.countread().subscribe(data=>{
    this.vehdetails=data;
  })
}

//redirect the particular brand varient with information
order(order:any){
  this.book.productpage(order);
}

ngOnInit(): void {
  this.logger.info("Product page initialized..");
}
}
