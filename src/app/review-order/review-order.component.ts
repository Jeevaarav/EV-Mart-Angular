import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { FillbookdetailsService } from '../fillbookdetails.service';

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.component.html',
  styleUrls: ['./review-order.component.css'],
  styles:[`input.ng-invalid && .details-form input.ng-dirty {border:2px solid red}`,`input.valid{border:2px solid green}`]
})
export class ReviewOrderComponent {
  mail:any;
  user:any;
  profile:any;
  phonenumber:any;
  parseVal:any;
  varientName:any;
  varientColor:any;
  varientimage:any;
  vehiclecolor:any="gerua";
  spec:any;
  specdetails:any;
  battery:any;
  range:any;
  topspeed:any;
  price:any;
  orderplaced:Boolean=false;
  state:any;
  city:any;
  date:any;
  day:any;
  year:any;
  datetaken:any;
  timetaken:any;
  orderformattime:any;
  getday:any;
  getFullDetails:any;
  getOrder:any;
  splitimg:any;
  reserveAmount:any;
  splitPrice:any;
  joinPrice:any;
  formatedAmount:any;
  Amount:any;
  stateListStore:any;
  districtstate:any;
  districtStore:any=[];
  evmartcenter:any;
  centerNameStore:any;

  constructor(private route:Router,private form:FormBuilder,private http:HttpClient,private filldetails:FillbookdetailsService){
   this.mail=sessionStorage.getItem('logmail');
    this.user=sessionStorage.getItem('reguser');
    this.profile=sessionStorage.getItem('profilepage');
    this.parseVal=JSON.parse(this.profile);
    this.phonenumber=this.parseVal.regphonenum;
    console.log(this.phonenumber);
    this.varientName=sessionStorage.getItem('varient_name');
    this.varientColor=sessionStorage.getItem('varient_Color');
    this.varientimage=sessionStorage.getItem('varient_image');
    this.spec=sessionStorage.getItem('Spec');
    this.specdetails=JSON.parse(this.spec);
    this.battery=this.specdetails.battery;
    this.range=this.specdetails.range;
    this.topspeed=this.specdetails.topspeed;
    this.price=this.specdetails.price;
    this.splitPrice=this.price.split(',');
    this.joinPrice=this.splitPrice.join('');
    console.log(this.joinPrice);
    this.reserveAmount=Math.floor(parseInt(this.joinPrice)*(30/100));
    this.formatedAmount=this.reserveAmount.toString();
    this.Amount= Number(this.formatedAmount).toLocaleString();
    console.log(this.Amount);
    sessionStorage.setItem('Amount',this.Amount);
    this.date=new Date();
    this.year=this.date.getFullYear();
    this.datetaken=this.date.getDate();
    this.timetaken=this.date.getTime();

    this.filldetails.stateDisplay().subscribe((stateslist)=>{
      this.stateListStore=stateslist;
      console.log(this.stateListStore[0].districts[0]);
    })
  }


  reviewform=this.form.group({
    State:['',Validators.required],
    City:['',Validators.required],
    Centername:['',Validators.required],
    mail:[sessionStorage.getItem('logmail'),[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    address:[sessionStorage.getItem('fulladdress'),[Validators.required,Validators.minLength(20)]],
    landmark:[sessionStorage.getItem('landmark'),[Validators.required,Validators.minLength(5)]],
    pincode:[sessionStorage.getItem('pincode'),[Validators.required,Validators.pattern("[0-9]{6}")]],
    doorno:[sessionStorage.getItem('doorno'),[Validators.required,Validators.pattern("^[0-9]+\s*[a-zA-Z]?(\/[0-9]+\s*[a-zA-Z]?)?$")]],
    firstname:[sessionStorage.getItem('reguser'),[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
    lastname:['',[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
    phonenumber:[sessionStorage.getItem('regphone'),[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]]
  })

  notify(){
    if(confirm("Are you sure? If you go back you will have to fill in your booking details again")){
      this.route.navigateByUrl('/orderpage');
    }
  }

  stateselect(state:any){
      this.state=state;
      this.http.get<any>("http://localhost:3000/states").subscribe((states)=>{
        const stateactive=states.find((states:any)=>{
          this.districtstate=states;
          return states.state==state;
        });
        if(stateactive){
          this.districtStore=this.districtstate.districts;
          this.centerNameStore=this.districtstate.Evmartcenter;
          console.log(this.districtStore);
        }
        else{
          console.log("Not found");
        }
      })
  }
  cityselect(city:any){
    this.city=city;
  }
  evcentername(center:any){
    this.evmartcenter=center;
  }
  fillDetails(){
    const orderid=Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
    const varientimg=sessionStorage.getItem('varient_image');
    const varientname=sessionStorage.getItem('varient_name');
    const varientcolor=sessionStorage.getItem('varient_Color');
    const battery=this.battery;
    const range=this.range;
    const topspeed=this.topspeed;
    const price=this.price;
    this.date=new Date();
    this.day=this.date.getDay();
    if(this.day==0){
      this.getday="Sunday";
    }
    else if(this.day==1){
      this.getday="Monday";
    }
    else if(this.day==2){
      this.getday="Tuesday";
    }
    else if(this.day==3){
      this.getday="Wednesday";
    }
    else if(this.day==4){
      this.getday="Thursday";
    }
    else if(this.day==5){
      this.getday="Friday";
    }
    else{
      this.getday="Saturday";
    }

    this.orderformattime=(formatDate(this.timetaken, 'dd-MMM-yyyy hh:mm:ss a', 'en-US', '+0530'));

    let filldetails={
      orderid:orderid,
      day:this.getday,
      varientcolor:varientcolor,
      varientimg:varientimg,
      varientname:varientname,
      battery:battery,
      range:range,
      topspeed:topspeed,
      price:price,
      State:this.state,
      City:this.city,
      Centername:this.evmartcenter,
      mail:this.reviewform.controls['mail'].value,
      address:this.reviewform.controls['address'].value,
      firstname:this.reviewform.controls['firstname'].value,
      lastname:this.reviewform.controls['lastname'].value,
      phonenumber:this.reviewform.controls['phonenumber'].value,
      landmark:this.reviewform.controls['landmark'].value,
      pincode:this.reviewform.controls['pincode'].value,
      doorno:this.reviewform.controls['doorno'].value
    }

    this.filldetails.storeDetails(filldetails);

  }

}
