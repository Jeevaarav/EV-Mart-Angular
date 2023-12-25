import { Component, ViewEncapsulation } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehiclemanagement',
  templateUrl: './vehiclemanagement.component.html',
  styleUrls: ['./vehiclemanagement.component.css'],
  styles:[`.addveh input.ng-invalid && .addveh input.ng-dirty {border:2px solid red}`,`.addveh input.ng-valid{border:2px solid green}`,`#text.ng-invalid && #text.ng-dirty {border-color:red}`,`#text.ng-valid{border-color:green}`],
  encapsulation:ViewEncapsulation.None
})
export class VehiclemanagementComponent {
  vehbrandname:any;
  localUrl:any;
  storevehicle:any;
  updatevehicleImage:any;
  vehiclebrandname:any;
  vehiclecontent:any;
  vehupd:any;
  vehicleregemail:any;
  vehiclejson:any;
  vehiclemanage:boolean=false;
  updatevehicle:boolean=false;
  imageUpload:boolean=false;
  updateurl:any="";
  constructor(private service:AdminService,private formbuild:FormBuilder,private route:Router,private http:HttpClient){
    this.service.countread().subscribe(vehbrand=>{
      this.vehbrandname=vehbrand;
    })
  }

  showPreviewImage(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.localUrl = event.target.result;
          console.log(this.localUrl);
      }
      console.log(reader.readAsDataURL(event.target.files[0]));
  }
  }

  updatePreviewImage(event:any){
    if (event.target.files && event.target.files[0]) {
      this.imageUpload=true;
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.updateurl = event.target.result;
          console.log(this.updateurl);
      }
      console.log(reader.readAsDataURL(event.target.files[0]));
  }
  }

  //vehicle addition form validators
  vehadd=this.formbuild.group({
    Brandname:['',Validators.required],
    content:['',[Validators.required,Validators.minLength(200)]],
    image:['',Validators.required]
  });


  //vehicle brand add data for user page
  vehicle(){
    let addVehicle={
      Brandname:this.vehadd.controls['Brandname'].value,
      content:this.vehadd.controls['content'].value,
      image:this.localUrl
    }
    console.log(addVehicle);
    this.service.vehaddition(addVehicle).subscribe(data=>{
      this.vehadd.reset();
      this.route.navigateByUrl('admin/vehiclemanagement').then(()=>{
        setTimeout(()=>{
          window.location.reload();
        },1500);
        alertifyjs.success().setContent('<h2>Vehicle Brand added</h2>').show();
      });
    });
  }

  addVehicle(){
    this.vehiclemanage=true;
  }

  closeForm(){
    this.vehiclemanage=false;
  }

  updateForm(){
    this.updatevehicle=false;
  }



  showUpdate(brandname:any){
    this.http.get<any>("http://localhost:3000/vehicleBrands").subscribe((vehicleDetails)=>{
     const find= vehicleDetails.find((findVehicle:any)=>{
      this.storevehicle=findVehicle;
        this.vehiclebrandname=findVehicle.Brandname;
        this.vehiclecontent=findVehicle.content;
        this.vehicleregemail=findVehicle.regemail;
        return findVehicle.Brandname==brandname;
      })
      if(find){
        this.updatevehicleImage=this.storevehicle.image;
        this.vehupd=this.formbuild.group({
          updateBrandname:[this.vehiclebrandname,Validators.required],
          updatecontent:[this.vehiclecontent,[Validators.required,Validators.minLength(200)]],
          updateimage:['']
        })
        // this.vehupd.controls['updateBrandname'].setValue=sessionStorage.getItem('updatebrand');
        console.log(this.storevehicle);
      }
    })
    this.showUpdatevehicle();
    // this.updatevehicle=true;
  }

  showUpdatevehicle(){
    this.updatevehicle=true;
  }

  updateVehicle(){
    console.log(this.vehupd.controls['updateBrandname'].value);
        console.log(this.vehupd.controls['updatecontent'].value);
        console.log(this.vehupd.controls['updateimage'].value);
        if(this.vehupd.controls['updateimage'].value==""){
          let updatevehicle={
            Brandname:this.vehupd.controls['updateBrandname'].value,
            content:this.vehupd.controls['updatecontent'].value,
            image:this.updatevehicleImage
          }
          const url="http://localhost:3000/vehicleBrands";
          this.http.patch(url+"/"+this.vehicleregemail,updatevehicle).subscribe((update)=>{
            console.log(update);
            this.vehupd.reset();
            this.route.navigateByUrl('admin/vehiclemanagement').then(()=>{
              setTimeout(()=>{
                window.location.reload();
              },1500);
              alertifyjs.success().setContent('<h2>Vehicle Details updated</h2>').show();
            });
          })
        }
        else if(this.vehupd.controls['updateimage'].value!=""){
          let updatevehicle={
            Brandname:this.vehupd.controls['updateBrandname'].value,
            content:this.vehupd.controls['updatecontent'].value,
            image:this.updateurl
          }
          const url="http://localhost:3000/vehicleBrands";
          this.http.patch(url+"/"+this.vehicleregemail,updatevehicle).subscribe((update)=>{
            console.log(update);
            this.vehupd.reset();
            this.route.navigateByUrl('admin/vehiclemanagement').then(()=>{
              setTimeout(()=>{
                window.location.reload();
              },1500);
              alertifyjs.success().setContent('<h2>Vehicle Details updated</h2>').show();
            });
          })
        }
  }



  deleteVehicle(brand:any){
    this.http.get<any>("http://localhost:3000/vehicleBrands").subscribe((vehicleDetails)=>{
     const find= vehicleDetails.find((findVehicle:any)=>{
      this.storevehicle=findVehicle;
        this.vehiclebrandname=findVehicle.Brandname;
        this.vehiclecontent=findVehicle.content;
        this.vehicleregemail=findVehicle.regemail;
        return findVehicle.Brandname==brand;
      })
      if(find){
        console.log(this.storevehicle);
        this.http.delete<any>("http://localhost:3000/vehicleBrands"+"/"+this.vehicleregemail).subscribe(()=>{
          console.log("deleted");
          this.route.navigateByUrl('admin/vehiclemanagement').then(()=>{
            setTimeout(()=>{
              window.location.reload();
            },1500);
            alertifyjs.success().setContent('<h2>Vehicle Deleted</h2>').show();
          });
        })
      }
    })
  }

  sendValue(brand:any){
    this.http.get<any>("http://localhost:3000/vehicleBrands").subscribe((vehicleDetails)=>{
     const find= vehicleDetails.find((findVehicle:any)=>{
      this.storevehicle=findVehicle;
        return findVehicle.Brandname==brand;
      })
      if(find){
        console.log(this.storevehicle);
        this.vehiclejson=JSON.stringify(this.storevehicle);
        sessionStorage.setItem('vehicleDetails',this.vehiclejson);
        this.route.navigateByUrl('adminvarientmanagement');
      }
    })
  }

  //logout for admin
  logout(){
    alert("Are you sure want to logout");
    this.route.navigateByUrl('');
  }
}
