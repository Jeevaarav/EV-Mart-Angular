import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LogincredentialsService } from '../logincredentials.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  evMartprofile:any;
  evMartStore:any;
  evMartphone:any;
  phone:any;
  user:any;
  email:any;
  evMartuser:any;
  evMartemail:any;
  evMartprof:any;
  editprof:boolean=false;
  constructor(private form:FormBuilder, private service:LogincredentialsService){
    this.evMartprofile=localStorage.getItem('profilepage');
    this.evMartemail=JSON.parse(this.evMartprofile);
    this.evMartuser=this.evMartemail.reguser;
    localStorage.setItem('updateuser',this.evMartuser);
    this.phone=this.evMartemail.regphonenum;
    localStorage.setItem('updatephone',this.phone);
    this.email=this.evMartemail.regemail;
    localStorage.setItem('updatemail',this.email);
  }
  showrightBar(){
    this.editprof=true;
  }
  close(){
    this.editprof=false;
  }

  updateinfo=this.form.group({
    regphonenum:[localStorage.getItem('updatephone'),[Validators.required,Validators.pattern("[0-9]{1}[0-9]{9}")]],
    reguser:[localStorage.getItem('updateuser'),[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]]
  });


  updatedetails(){
   if(confirm("Are you sure to update the profile details?")){
    const phone=this.updateinfo.controls['regphonenum'].value;
    const user=this.updateinfo.controls['reguser'].value;
    this.service.profileupdate(phone,this.email,user)
   }
   else{
    console.log("No changes");
   }

  }
}
