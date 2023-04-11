import { Component, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductpageComponent {
  vehdetails:any;
constructor(private vehservice:AdminService){
  this.vehservice.countread().subscribe(data=>{
    this.vehdetails=data;
  })
}

}
