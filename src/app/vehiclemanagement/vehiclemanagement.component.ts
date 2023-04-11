import { Component, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-vehiclemanagement',
  templateUrl: './vehiclemanagement.component.html',
  styleUrls: ['./vehiclemanagement.component.css'],
  styles:[`.addveh input.ng-invalid && .addveh input.ng-dirty {border:2px solid red}`,`.addveh input.ng-valid{border:2px solid green}`,`#text.ng-invalid && #text.ng-dirty {border-color:red}`,`#text.ng-valid{border-color:green}`],
  encapsulation:ViewEncapsulation.None
})
export class VehiclemanagementComponent {
  vehbrandname:any;
  constructor(private service:AdminService,private formbuild:FormBuilder,private route:Router){
    this.service.countread().subscribe(vehbrand=>{
      this.vehbrandname=vehbrand;
    })
  }
  vehadd=this.formbuild.group({
    Brandname:['',Validators.required],
    image:['',Validators.required],
    content:['',[Validators.required,Validators.minLength(200)]]
  });
  vehicle(){
    this.service.vehaddition(this.vehadd.value).subscribe(data=>{
      this.vehadd.reset();
      this.route.navigateByUrl('admin/vehiclemanagement').then(()=>{
        setTimeout(()=>{
          window.location.reload();
        },1500);
        alertifyjs.success().setContent('<h2>Vehicle Brand added</h2>').show();
      });
    });
  }

}
