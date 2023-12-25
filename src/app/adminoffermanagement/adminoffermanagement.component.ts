import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { url } from 'src/environments/environment';

@Component({
  selector: 'app-adminoffermanagement',
  templateUrl: './adminoffermanagement.component.html',
  styleUrls: ['./adminoffermanagement.component.css']
})
export class AdminoffermanagementComponent {

  value:any;
  val2:any;
  servicedata:any;
  varientData:any;
  totalVal:any;
  store:any;
  varientLoop:any;
  date:any;
  splitdate:any;
  varientPrice:any;
  batterySpec:any;
  vehiclePrice:any;
  originalPrice:any;
  localUrl:any;
  percentageCalculation:any;
  offeredPrice:any;
  percentageValue:any;

  constructor(private route:Router,private formbuild:FormBuilder,private _http:HttpClient){
    this.value=localStorage.getItem('serviceform');

  this._http.get<any>(url.serviceData).subscribe((value)=>{
  this.servicedata=value[0].Brandname;
  this.totalVal=value;
  console.log(this.servicedata);
  console.log(value[0].Brandname[0].Varients[0].price);
  })

 
  }

  //service form validators
servform=this.formbuild.group({
  brand:['',Validators.required],
  varient:['',Validators.required],
  battery:['',Validators.required],
  Content:['We have always got your back! Watch out this offer, valid',Validators.required],
  dateandtime:['',Validators.required]
});

//getting data from inputs after submit the form
submit(){
  this.date=new Date();
  const brand=this.servform.controls['brand'].value;
  const varient=this.servform.controls['varient'].value;
  const mail=sessionStorage.getItem('logmail');
  const imgurl=this.localUrl;
  const validity="We have always got your back! Watch out this offer, valid upto";
  const button="Order Now";
  const dateandtime=this.servform.controls['dateandtime'].value;

  this._http.post("http://localhost:3000/offers",{img:imgurl,content:"Get ₹5,000* off on the",time:dateandtime,validity:validity,brand:brand,varient:varient,button:button,regemail:mail}).subscribe((offerposted)=>{
  console.log(offerposted);
  })
}

//take brand and varients for particular brand
takeBrand(brand:any){
  console.log(brand);
  this._http.get<any>(url.serviceData).subscribe((val)=>{
    console.log(val[0].Brandname);
    const check=val[0].Brandname.find((y:any)=>{
      console.log(y.Brand);
      this.store=y;
      console.log(this.store.Varients);
      return y.Brand==brand;
    });
    if(check){
      this.varientLoop=this.store.Varients;
    }
    else{
      alert("Not found");
    }
  })
}

//varient data
takeVarient(varient:any){
  const varientFind=this.varientLoop.find((varientName:any)=>{
    this.varientPrice=varientName;
    console.log(varient);
    console.log(varientName.Varient);
    return varient==varientName.Varient;
  });
  if(varientFind){
    this.batterySpec=this.varientPrice.battery;
    console.log(this.varientPrice.battery);
  }
}

//battery Specification selection
specBattery(battery:any){
  const batteryFind=this.batterySpec.find((batterySearch:any)=>{
    console.log(battery);
    console.log(batterySearch.spec);
    this.vehiclePrice=batterySearch.price;
    return battery==batterySearch.spec;
  })
  if(batteryFind){
    this.originalPrice=this.vehiclePrice;
    console.log(this.vehiclePrice);
  }
}

//Image file upload
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

//offered price calculation
getOfferPercentage(offerPercentage:any){
  this.percentageValue=offerPercentage.split('%');
  this.percentageCalculation=(this.percentageValue[0]/100);
  console.log(this.percentageCalculation);
  this.offeredPrice=parseInt(this.originalPrice)*(this.percentageCalculation);
  this.offeredPrice=parseInt(this.originalPrice)-Math.floor(this.offeredPrice);
}

  //logout for admin
  logout(){
    alert("Are you sure want to logout");
    this.route.navigateByUrl('');
    sessionStorage.setItem('isAdminLogged','false');
  }
}
