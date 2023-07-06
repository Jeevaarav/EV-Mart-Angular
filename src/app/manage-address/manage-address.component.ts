import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css'],
  styles:[`.manageadd input.ng-valid{border: 2px solid green}`,`.manageadd input.ng-invalid && .manageadd input.ng-dirty{border:2px solid red}`,
  `.manageadd textarea.ng-valid{border: 2px solid green}`,`.manageadd textarea.ng-invalid && .manageadd textarea.ng-dirty{border:2px solid red}`,
  `.subform input.ng-invalid{border: none}`]
})
export class ManageAddressComponent {
  editaddress:Boolean=false;
  alreadyAdded:Boolean=true;
  addressStore:any;
  fulladdress:any;
  profile:any;
  profileaddress:any;
  getAddress:any;
  address:any;
  doorno:any;
  landmark:any;
  pincode:any;
  newAddress:Boolean=false;
  printAddress:any;

  constructor(private form:FormBuilder,private http:HttpClient){
    this.http.get<any>("http://localhost:3000/Register").subscribe((addressCheck)=>{
      const user=addressCheck.find((logged:any)=>{
        this.addressStore=logged;
        this.fulladdress=logged.address;
        console.log(this.fulladdress);
        return logged.regemail==sessionStorage.getItem('logmail');
      });
      if(user){
       if(this.addressStore.address){
        this.printAddress=this.fulladdress[0];
        this.alreadyAdded=false;
        this.newAddress=true;
       }
       else{
        this.alreadyAdded=true;
        this.newAddress=false;
       }
      }
    })
  }

  editAddress(){
    this.editaddress=true;
    this.profile=sessionStorage.getItem("profilepage");
    this.profileaddress=JSON.parse(this.profile);
    console.log(this.profileaddress);
    this.getAddress=this.profileaddress.address[0];
  }


  closeAddress(){
    this.editaddress=false;
  }
  showManageaddress(){
    this.editaddress=true;
  }

  manageaddress=this.form.group({
    fulladdress:[sessionStorage.getItem('fulladdress'),[Validators.required,Validators.minLength(20)]],
    doorno:[sessionStorage.getItem('doorno'),[Validators.required,Validators.pattern("^[0-9]+\s*[a-zA-Z]?(\/[0-9]+\s*[a-zA-Z]?)?$")]],
    landmark:[sessionStorage.getItem('landmark'),[Validators.required,Validators.minLength(4)]],
    pincode:[sessionStorage.getItem('pincode'),[Validators.required,Validators.pattern("[0-9]{6}")]]
  })

  addressDetails(){
    const fulladdress=this.manageaddress.controls['fulladdress'].value;
    const doorno=this.manageaddress.controls['doorno'].value;
    const landmark=this.manageaddress.controls['landmark'].value;
    const pincode=this.manageaddress.controls['pincode'].value;
    const mail=sessionStorage.getItem('logmail');
    

    this.http.get<any>("http://localhost:3000/Register").subscribe((x)=>{
      const user=x.find((logged:any)=>{
        console.log(logged.regemail);
        return logged.regemail==mail;
      });
      if(user){
        this.http.patch("http://localhost:3000/Register/"+mail,{address:[{fulladdress:fulladdress,doorno:doorno,landmark:landmark,pincode:pincode}]}).subscribe((address)=>{
          console.log(address);
          this.http.get<any>("http://localhost:3000/Register/"+mail).subscribe((regaddress)=>{
          sessionStorage.setItem('fulladdress',regaddress.address[0].fulladdress);
          sessionStorage.setItem('doorno',regaddress.address[0].doorno);
          sessionStorage.setItem('landmark',regaddress.address[0].landmark);
          sessionStorage.setItem('pincode',regaddress.address[0].pincode);
          setTimeout(()=>{
              window.location.reload();
          },1000);
          alertifyjs.success().setContent('<h3>Address Saved Successfully</h3>').show();
          })
        })
      }
    });
    console.log(this.manageaddress.value);
  }
}
