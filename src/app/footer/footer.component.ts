import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FooterComponent {
  subenter:boolean=false;
  subvalid:boolean=false;
  thanks:boolean=false;
  alreadyRegistered:any;
  constructor(private form:FormBuilder,private subservice:SubserviceService){

  }

  // this.alreadyRegistered=this.subservice.errormsg;
  // setInterval(()=>{

  //   setTimeout(()=>{
  //     this.alreadyRegistered="";
  //   },2000)
  // },500)


  //validating the subscription input
  subscribe=this.form.group({
    mail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
  });

  //store the subscription mail ID
  store(){
    console.log(this.subscribe.value);
    this.subservice.subscriptiondata(this.subscribe.value);
  }

  //To hide and show error and success messages
  substore(){
    this.subenter=true;
    this.subvalid=true;
    this.thankssub();
  }
  thankssub(){
    if(this.subscribe.controls['mail'].valid){
      this.thanks=true;
      setTimeout(()=>{
        this.thanks=false;
        this.subscribe.reset();
        this.subenter=false;
      },2000);
    }
    else{
      this.thanks=false;
    }
    console.log(this.thanks);
  }
}
