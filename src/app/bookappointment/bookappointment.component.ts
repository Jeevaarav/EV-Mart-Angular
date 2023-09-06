import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { url } from 'src/environments/environment';
import { LoggerService } from '../logger.service';


@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css'],
  styles:[`.bookform input.ng-invalid && .bookform input.ng-dirty{border:2px solid red}`]
})
export class BookappointmentComponent implements OnInit {
  getPin:any;
  showPin:any;
  storePin:any;
  showButton:any=0;

  constructor(private form:FormBuilder,private _http:HttpClient,private route:Router,private logger:LoggerService){}
  //Pincode Validators
  Pincode=this.form.group({
    Pincode:['',[Validators.required,Validators.pattern("[0-9]{6}")]]
  })

  //This block is used to search for the pincode and validating the pincode
  searchPincode(pincode:any){
    if(pincode.length==6){
      this._http.get<any>(url.exchangeOffers).subscribe((pincodeval)=>{
      const code=pincodeval.find((pin:any)=>{
        this.getPin=pin;
        return pincode==pin.pincode;
      })
      if(code){
        this.showPin=this.getPin.city;
        this.showButton++;
        this.logger.info("City searched..");
      }
      else{
        this.showPin="Online Exchange is not available for above location";
        this.logger.error("Online Exchange is not available for above location");
        this.showButton=0;
      }
      })
    }
    else{
      this.showPin="";
    }
  }

  //This block is used to get the pincode after form submitted
  getPincode(){
    if(this.showButton>0){
      let store={
        Pincode:this.Pincode.controls['Pincode'].value,
        city:this.showPin
      }
      this.storePin=JSON.stringify(store);
      sessionStorage.setItem('exchangepincode',this.storePin);
      this.route.navigateByUrl('/oldvehicle');
    }
  }

  ngOnInit(): void {
    this.logger.info("Book appointment Component initialized..");
  }
  }
