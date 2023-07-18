import { Component } from '@angular/core';
import { FillbookdetailsService } from '../fillbookdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderconfirmpage',
  templateUrl: './orderconfirmpage.component.html',
  styleUrls: ['./orderconfirmpage.component.css']
})
export class OrderconfirmpageComponent {
  orderPlaced:Boolean=true;

  constructor(private route:Router){
    //used for redirect after few seconds
    setTimeout(() => {
      this.orderPlaced=false;
      this.route.navigateByUrl("Product");
  }, 4000);
  }


}
