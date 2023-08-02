import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { url } from 'src/Environment/environment';

@Component({
  selector: 'app-exchangebooking',
  templateUrl: './exchangebooking.component.html',
  styleUrls: ['./exchangebooking.component.css']
})
export class ExchangebookingComponent {
  Brand:any;
  modelName:any;
  storeBrandname:any;
  vehicleColor:any;
  yearOfManufacture:any;
  kilometerOfVehicle:any;
  loanStatus:any;
  vehicleCondition:any;
  ownerShip:any;
  loanPending:any;
  count:any=0;
  ownerShipvehicle:any;
  ownerShipCount:any;
  yearCalculation:any;
  vehicleKMS:any;
  vehicleKilometerCalculation:any;
  vehicleStringCalculation:any;

  showFAQ:Boolean=false;

  constructor(private form:FormBuilder,private _http:HttpClient,private route:Router){
    this._http.get<any>(url.oldvehilcle).subscribe((oldvehicle)=>{
    this.Brand=oldvehicle;
    })
  }

  //These blocks are used for hide and show the question
  howWorks(){
    this.showFAQ=true;
  }
  closePopup(){
    this.showFAQ=false;
  }

  //Validators for old vehicle form details
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

  //Checking brand name and retrieve data for the year and kilometers
  oldVehicleBrand(brandName:any){
    this._http.get<any>(url.oldvehilcle).subscribe((brandname)=>{
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
        this._http.get<any>(url.yearOfmanufacture).subscribe((year)=>{
          this.yearOfManufacture=year;
        });
        this._http.get<any>(url.kilometers).subscribe((Kilometer)=>{
          this.kilometerOfVehicle=Kilometer;
        })
      }
      else{
        console.log("Not found");
      }
    })
  }

  //validating the input dynamically for loan status
  loanStatusChange(loanstatus:any){
    if(loanstatus=="Pending"){
      this.loanPending="Not Eligible for Exchange offer";
      this.count=0;
    }
    else{
      this.loanPending="";
      this.count=1;
    }
  }

  //Validating the input dynamically for ownership status
  ownerShipstatus(ownerShip:any){
    if(ownerShip==="Not Working"){
      this.ownerShipvehicle="Not Eligible for Exchange offer";
      this.ownerShipCount=0;
    }
    else{
      this.ownerShipvehicle="",
      this.ownerShipCount=1;
    }
  }

  //Getting data from input after form submission
  getOldVehicledetails(){
    if(this.oldvehicledetails.controls['Yearofmfr'].value=="2015"){
      this.yearCalculation=Math.floor(Math.random()* (9000-10000)+9000);
    }
    else if(this.oldvehicledetails.controls['Yearofmfr'].value=="2016"){
      this.yearCalculation=Math.floor(Math.random()* (10000-15000)+10000);
    }
    else if(this.oldvehicledetails.controls['Yearofmfr'].value=="2017"){
      this.yearCalculation=Math.floor(Math.random()* (15000-20000)+15000);
    }
    else if(this.oldvehicledetails.controls['Yearofmfr'].value=="2018"){
      this.yearCalculation=Math.floor(Math.random()* (20000-25000)+20000);
    }
    else if(this.oldvehicledetails.controls['Yearofmfr'].value=="2019"){
      this.yearCalculation=Math.floor(Math.random()* (30000-35000)+30000);
    }
    else if(this.oldvehicledetails.controls['Yearofmfr'].value=="2020"){
      this.yearCalculation=Math.floor(Math.random()* (35000-37000)+35000);
    }
    else if(this.oldvehicledetails.controls['Yearofmfr'].value=="2021"){
      this.yearCalculation=Math.floor(Math.random()* (37000-40000)+37000);
    }
    else if(this.oldvehicledetails.controls['Yearofmfr'].value=="2022"){
      this.yearCalculation=Math.floor(Math.random()* (40000-42000)+42000);
    }

    this._http.get<any>(url.kilometers).subscribe((kms)=>{
      const kmsfind=kms.find((kmsvalue:any)=>{
        this.vehicleKMS=kmsvalue;
        return kmsvalue.kms==this.oldvehicledetails.controls['Kilometer'].value
      })
      if(kmsfind){
        this.vehicleKilometerCalculation=parseInt(this.vehicleKMS.value)+parseInt(this.yearCalculation);
        this.vehicleStringCalculation=this.vehicleKilometerCalculation.toString();
        sessionStorage.setItem('ExchangeValue',this.vehicleKilometerCalculation);
        console.log(this.vehicleStringCalculation);
      }
    })

    console.log(this.yearCalculation);
    let oldVehicleFullDetails={
      Brandname:this.oldvehicledetails.controls['Brand'].value,
      Modelname:this.oldvehicledetails.controls['Model'].value,
      Varientname:this.oldvehicledetails.controls['Varient'].value,
      Color:this.oldvehicledetails.controls['Color'].value,
      Yearofmfr:this.oldvehicledetails.controls['Yearofmfr'].value,
      kilometer:this.oldvehicledetails.controls['Kilometer'].value,
      Registrationnum:this.oldvehicledetails.controls['Registrationnum'].value,
      loan:this.oldvehicledetails.controls['Loan'].value,
      vehiclecondition:this.oldvehicledetails.controls['Vehiclecondition'].value,
      ownername:this.oldvehicledetails.controls['Ownername'].value,
      ownership:this.oldvehicledetails.controls['Ownership'].value
    }
    if(this.count==1 && this.ownerShipCount==1){
      sessionStorage.setItem('oldVehicleDetails',JSON.stringify(oldVehicleFullDetails));
      this.route.navigateByUrl('Product');
    }
    else{
      alert("Not Eligible for Exchange Offers");
    }
   console.log(this.oldvehicledetails.value);
  }

}
