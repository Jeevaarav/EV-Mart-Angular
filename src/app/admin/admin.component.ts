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
  count:any="";
  servcount:any;
  constructor(private route:Router,private service:LogincredentialsService,private details:AdminService){
    this.details.countread().subscribe(data=>{
      this.count=data.length;
    });

    this.details.servicecount().subscribe(servcount=>{
      this.servcount=servcount.length;
    })
  }
  logout(){
    this.service.closenav=true;
    alert("Are you sure want to logout");
    this.route.navigateByUrl('');
  }

}
