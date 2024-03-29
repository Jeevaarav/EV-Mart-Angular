import { HttpClient } from '@angular/common/http';
import { Component,ViewEncapsulation} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LogincredentialsService } from '../logincredentials.service';
import { ForgotService } from '../forgot.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css'],
  styles:[`.forgot input.ng-invaid && .forgot input.ng-dirty{border:2px solid red}`,`.forgot input.ng-valid{border:2px solid green}`],
  encapsulation:ViewEncapsulation.None
})
export class ForgotpassComponent {
  msg:any="";
  call:any;
  store:any;
  break:any;

  constructor(private form:FormBuilder,private logincred:LogincredentialsService,private route:Router,private http:HttpClient,private forgotserv:ForgotService){
    setInterval(()=>{
      this.call=this.forgotserv.errormsg;
    },300);
  }

  //Validators for change password
  forgotform1=this.form.group({
    forgotemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    forgotuser:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]]
  })

  //check if the inputs are empty
  forgotuser(forgotmail:any,forgotuser:any){
    if(forgotmail=="" || forgotuser==""){
      this.call="";
      this.msg="Please fill the blank";
      this.break=document.getElementById('br');
      this.break.style.display="block";
      setTimeout(()=>{
        this.msg="";
      },2000);
    }
    else{
      this.msg="";
    }
  }

  //update the chnaged password after submitting the form
  forgotcheck(){
    const mail=this.forgotform1.controls['forgotemail'].value;
    const user=this.forgotform1.controls['forgotuser'].value;
    this.forgotserv.forgotuser(mail,user);
    this.forgotform1.reset();
    this.forgotserv.errormsg="";
  }

  //passing message to input
 message()
 {
  this.msg=this.store;
 }
}
