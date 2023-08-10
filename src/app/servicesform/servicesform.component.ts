import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EvmartserviceService } from '../evmartservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/Environment/environment';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servicesform',
  templateUrl: './servicesform.component.html',
  styleUrls: ['./servicesform.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServicesformComponent implements OnInit {
  value:any;
  val2:any;
  servicedata:any;
  varientData:any;
  totalVal:any;
  store:any;
  varientLoop:any;
  date:any;
  splitdate:any;
constructor(private service:EvmartserviceService,private formbuild:FormBuilder,private http:HttpClient,private logger:LoggerService){
  this.value=localStorage.getItem('serviceform');

  this.http.get<any>(url.serviceData).subscribe((value)=>{
  this.servicedata=value[0].Brandname;
  this.totalVal=value;
  })
}

//service form validators
servform=this.formbuild.group({
  brand:['',Validators.required],
  varient:['',Validators.required],
  vehiclenumber:['',[Validators.required,Validators.pattern("^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$")]],
  problem:['',[Validators.required,Validators.minLength(100)]]
});

//getting data from inputs after submit the form
submit(category:any){
  this.date=new Date();
  const brand=this.servform.controls['brand'].value;
  const varient=this.servform.controls['varient'].value;
  const vehiclenumber=this.servform.controls['vehiclenumber'].value;
  const problem=this.servform.controls['problem'].value;
  const mail=sessionStorage.getItem('logmail');
  this.service.storedata(brand,varient,vehiclenumber,problem,mail,this.date,category);
}

//take brand and varients for particular brand
takeBrand(brand:any){
  this.http.get<any>(url.serviceData).subscribe((val)=>{
    const check=val[0].Brandname.find((y:any)=>{
      this.store=y;
      return y.Brand==brand;
    });
    if(check){
      this.varientLoop=this.store.Varients;
    }
    else{
      this.logger.error("Varients not found");
      alert("Varients not found");
    }
  })
}

//varient data
takeVarient(varient:any){
  this.logger.info(varient);
}

ngOnInit(): void {
this.logger.info("User service form Component initialized..");
}
}
