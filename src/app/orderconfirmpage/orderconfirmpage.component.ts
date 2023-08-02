import { Component } from '@angular/core';
import { FillbookdetailsService } from '../fillbookdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderconfirmpage',
  templateUrl: './orderconfirmpage.component.html',
  styleUrls: ['./orderconfirmpage.component.css']
})
export class OrderconfirmpageComponent {

  constructor(private route:Router){
    //used for redirect after few seconds
    setTimeout(() => {
      this.route.navigateByUrl("Product").then(()=>{
        window.location.reload();
      });
  }, 4000);
  }


}
