import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { LogincredentialsService } from '../logincredentials.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  vehicleCount:any="";
  serviceRequestCount:any;

  constructor(private route:Router,private service:LogincredentialsService,private details:AdminService){

    //take count for the dashboard for respective management
    this.details.countread().subscribe(availableVehicleCount=>{
      this.vehicleCount=availableVehicleCount.length;
    });
    this.details.servicecount().subscribe(newServiceRequest=>{
      this.serviceRequestCount=newServiceRequest.length;
    })
    //take count for the dashboard for respective management
  }

  //logout for the Admin
  logout(){
    this.service.closenav=true;
    alert("Are you sure want to logout");
    this.route.navigateByUrl('');
    sessionStorage.setItem('isAdminlogged','false');
  }
  //logout for the Admin

}
