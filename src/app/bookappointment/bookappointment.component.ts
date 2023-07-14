import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css'],
  styles:[`.bookform input.ng-invalid && .bookform input.ng-dirty{border:2px solid red}`]
})
export class BookappointmentComponent {
  getPin:any;
  showPin:any;
  storePin:any;
  showButton:any=0;

  constructor(private form:FormBuilder,private _http:HttpClient,private route:Router){}

  Pincode=this.form.group({
    Pincode:['',[Validators.required,Validators.pattern("[0-9]{6}")]]
  })


  searchPincode(pincode:any){
    if(pincode.length==6){
      this._http.get<any>("http://localhost:3000/exchangeoffers").subscribe((pincodeval)=>{
      const code=pincodeval.find((pin:any)=>{
        this.getPin=pin;
        return pincode==pin.pincode;
      })
      if(code){
        this.showPin=this.getPin.city;
        this.showButton++;
        console.log(this.showButton);
      }
      else{
        this.showPin="Online Exchange is not available for above location";
        this.showButton=0;
      }
      })
    }
    else{
      this.showPin="";
    }
  }

  getPincode(){
    if(this.showButton>0){
      console.log(this.Pincode.value);
      let store={
        Pincode:this.Pincode.controls['Pincode'].value,
        city:this.showPin
      }
      this.storePin=JSON.stringify(store);
      sessionStorage.setItem('exchangepincode',this.storePin);
      this.route.navigateByUrl('/oldvehicle');
    }
  }
  }
