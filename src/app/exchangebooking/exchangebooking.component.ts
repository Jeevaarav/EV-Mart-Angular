import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exchangebooking',
  templateUrl: './exchangebooking.component.html',
  styleUrls: ['./exchangebooking.component.css']
})
export class ExchangebookingComponent {
  showFAQ:Boolean=false;
  Brand:any;
  modelName:any;
  storeBrandname:any;
  vehicleColor:any;
  yearOfManufacture:any;
  kilometerOfVehicle:any;
  loanStatus:any;
  vehicleCondition:any;
  ownerShip:any;

  constructor(private form:FormBuilder,private _http:HttpClient){
    this._http.get<any>("http://localhost:3000/oldvehicle").subscribe((oldvehicle)=>{
    this.Brand=oldvehicle;
    })
  }

  howWorks(){
    this.showFAQ=true;
  }
  closePopup(){
    this.showFAQ=false;
  }

  oldvehicledetails=this.form.group({
    Brand:['',Validators.required],
    Model:['',Validators.required],
    Varient:['',Validators.required],
    Color:['',Validators.required],
    Yearofmfr:['',Validators.required],
    Kilometer:['',Validators.required],
    Registrationnum:['',[Validators.required,Validators.pattern("[0-9]*")]],
    Loan:['',Validators.required],
    Vehiclecondition:['',Validators.required],
    Ownername:['',[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
    Ownership:['',Validators.required]
  })

  oldVehicleBrand(brandName:any){
    this._http.get<any>("http://localhost:3000/oldvehicle").subscribe((brandname)=>{
      const Brand=brandname.find((brandname:any)=>{
        this.storeBrandname=brandname;
        return brandname.Brand==brandName;
      });
      if(Brand){
        this.vehicleColor=this.storeBrandname.vehiclecolor;
        this.loanStatus=this.storeBrandname.loan;
        this.vehicleCondition=this.storeBrandname.condition;
        console.log(this.storeBrandname);
        this.modelName=this.storeBrandname.Model;
        this.ownerShip=this.storeBrandname.vehicleowner;
        this._http.get<any>("http://localhost:3000/yearofmanufacture").subscribe((year)=>{
          this.yearOfManufacture=year;
        });
        this._http.get<any>("http://localhost:3000/kilometerrange").subscribe((Kilometer)=>{
          this.kilometerOfVehicle=Kilometer;
        })  
      }
      else{
        console.log("Not found");
      }
    })
  }
  
  getOldVehicledetails(){
   console.log(this.oldvehicledetails.value);
  }

}
