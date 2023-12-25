import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-varientmanagement',
  templateUrl: './varientmanagement.component.html',
  styleUrls: ['./varientmanagement.component.css']
})
export class VarientmanagementComponent {
  vehicleinfo:any;
  parsedVehicle:any;
  varients:any;
  imagedisplay:any;
  imageurl:any;
  choosedVarientimage:any;
  storeNospec:any;
  varientname:any;
  varientimg:any;
  number:any;
  imagePush:any;
  email:any;
  displayimg:any;
  spec:any;
  anotherspec:any;
  addVarient:boolean=false;
  choosedimg:boolean=false;
  specification:boolean=false;
  vname:any=[];
  vimage:any=[];
  displayVarients:any=[];
  coloravailable:any=[];
  requiredSpec:any=['kwh','km','kmph','INR'];


  manikandan:any={};

  constructor(private route:Router,private form:FormBuilder,private http:HttpClient){
    this.vehicleinfo=sessionStorage.getItem('vehicleDetails');
    this.parsedVehicle=JSON.parse(this.vehicleinfo);
    this.imagedisplay=this.parsedVehicle.displayimg;
    this.email=this.parsedVehicle.regemail;
    console.log(this.parsedVehicle.varients);
    this.varients=this.parsedVehicle.varients;
    for(var i=0;i<this.parsedVehicle.varients.length;i++){
      this.vname[i]=this.parsedVehicle.varients[i].vname.split(' ').join("");
      this.vimage[i]=this.parsedVehicle.varients[i].vimage;
    }

    console.log(this.vimage);

    for(var z=0;z<this.parsedVehicle.div.length;z++){
      this.coloravailable[z]=this.parsedVehicle.div;
    }
    // console.log(this.coloravailable);

  for(var j=0;j<this.parsedVehicle.varients.length;j++){
    console.log(this.parsedVehicle[this.vname[j]]);
    this.displayVarients[j]=this.parsedVehicle[this.vname[j]];
    // this.displayVarients[j][j].push(this.imagedisplay[j]);
  }
  console.log(this.displayVarients);
    // console.log(this.parsedVehicle[this.vname]);
    // this.varients.find((varientFind:any)=>{

    // })
  }

  showImage(event:any){
    if (event.target.files && event.target.files[0]) {
      this.choosedimg=true;
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.imageurl = event.target.result;
          console.log(this.imageurl);
          this.choosedVarientimage=this.imageurl
      }
      console.log(reader.readAsDataURL(event.target.files[0]));
  }
  }

  varientadd=this.form.group({
    newvarient:['',Validators.required],
    varientimage:['',Validators.required],
    numberofimage:['',Validators.required],
    battery:['',Validators.required],
    range:['',Validators.required],
    topspeed:['',Validators.required],
    price:['',Validators.required]
  })

  values(index:any,specify:any,range:any,topspeed:any,price:any){
    console.log(specify);
    console.log(range);
    console.log(topspeed);
    console.log(price);

    console.log(index);

    if(index==0 && (specify!="" && range!="" && topspeed!="" && price!="")){
      this.spec=[{
        battery:specify,
        range:range,
        topspeed:topspeed,
        price:price
      }]
      console.log(this.spec[0].battery);
    }
    else if(index>0 && (this.spec[0].battery!="" && this.spec[0].range!="" && this.spec[0].topspeed!="" && this.spec[0].price!="")) {
      this.anotherspec={
        battery:specify,
        range:range,
        topspeed:topspeed,
        price:price
      }
      if(this.anotherspec.battery!="" && this.anotherspec.range!="" && this.anotherspec.topspeed!="" && this.anotherspec.price.length>=6){
        this.spec.push(this.anotherspec);
        // for(var j=0;j<this.parsedVehicle.varients.length;j++){
        //   console.log(this.parsedVehicle[this.vname[j]]);
        //   this.displayVarients[j]=this.parsedVehicle[this.vname[j]];
        //   // this.displayVarients[j][j].push(this.imagedisplay[j]);
        //   console.log(this.displayVarients);
        // }
      }
    }
    console.log(this.spec);
  }

  addVehiclevarient(){

      this.varientname=this.varientadd.controls['newvarient'].value;
      this.varientimg=this.choosedVarientimage;
      this.number=this.varientadd.controls['numberofimage'].value;

    // let spec1={
    //   battery:this.varientadd.controls['battery'].value,
    //   range:this.varientadd.controls['range'].value,
    //   topspeed:this.varientadd.controls['topspeed'].value,
    //   price:this.varientadd.controls['price'].value
    // }

    // console.log(spec1);

    let varient={
      vname:this.varientname,
      vimage:this.varientimg
    }
    this.varients.push(varient);
    console.log(this.varients.length-1);
    console.log(this.spec);
    const posttitle=this.varients.length-1;
    var mani=varient.vname;
    this.manikandan[mani]=this.varientname;
    console.log(this.manikandan);

    const stack={
      [mani]:this.spec
    }
    // var dummyArray={};
    // dummyArray[mani]=this.varientname;

    this.http.patch<any>("http://localhost:3000/vehicleBrands/"+this.email,{varients:this.varients}).subscribe((patch)=>{
      this.http.patch<any>("http://localhost:3000/vehicleBrands/"+this.email,stack).subscribe((post)=>{

        })
    })
    // this.http.get<any>("http://localhost:3000/vehicleBrands").subscribe((vehicleBrands)=>{

    // })


  }

  battery(spec:any){
    if(spec==""){
      this.specification=false;
    }
    else{
      this.specification=true;
    }
    this.storeNospec=parseInt(spec);
  }

  addForm(){
    this.addVarient=false;
  }

  addnewVarient(){
    this.addVarient=true;
  }

  //logout for admin
  logout(){
    alert("Are you sure want to logout");
    this.route.navigateByUrl('');
  }
}
