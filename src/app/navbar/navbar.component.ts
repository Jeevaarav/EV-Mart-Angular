import { HttpClient } from '@angular/common/http';
import { Component,ViewEncapsulation} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LogincredentialsService } from '../logincredentials.service';
import { ForgotService } from '../forgot.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles:[`.regform input.ng-valid{border: 2px solid green}`,`.regform input.ng-invalid && .regform input.ng-dirty{border:2px solid red}`,
          `.logform input.ng-valid{border: 2px solid green}`,`.logform input.ng-invalid && .regform input.ng-dirty{border:2px solid red}`,
          `.subform input.ng-invalid{border: none}` ],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent {
exit:boolean=false;
create:boolean=false;
forgot:boolean=false;
forgotnew:boolean=false;
error:any="";
btn:boolean=false;
constructor(private form:FormBuilder,private logincred:LogincredentialsService,private route:Router,private http:HttpClient,private forgotserv:ForgotService){ }
login=this.form.group({
  email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]]
});
register=this.form.group({
  regemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  reguser:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]],
  regpass:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
  regconfirm:['',Validators.required]
});
forgotform1=this.form.group({
  forgotemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  forgotuser:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]]
})
save(confirm:any,password:any){
  if(confirm!=password){
    this.error="password mismatch";
  }
  else{
    this.error="";
  }
  return this.error;
}
open(){

 this.exit=true;
}
close(){
  this.login.reset();
  this.exit=false;
}
createopen(){
  this.login.reset();
  this.exit=false;
  this.create=true;
}
createclose(){
  this.exit=true;
  this.create=false;
}
forgotopen(){
  this.exit=false;
  this.forgot=true;
}
forgotclose(){
  this.forgot=false;
  this.exit=true;
}
forgotnewopen(){
  this.forgotnew=true;
  this.forgot=false;
}
forgotnewclose(){
  this.forgot=true;
  this.forgotnew=false;
}
regdetails(){
  this.logincred.savedata(this.register.value).subscribe(data=>{
    alert("Thanks for registering EV Mart, Let's experience the EV world");
    this.exit=false;
    this.create=false;
    this.route.navigateByUrl('/Product');
  });
}

logdetails(){
  const email=this.login.controls['email'].value;
  const password=this.login.controls['password'].value;
  this.logincred.retrievedata(email,password);
  this.login.reset();
  this.exit=false;
  // this.route.navigateByUrl('/Product');
}
forgotpassword(){
  const forgotmail=this.forgotform1.controls['forgotemail'].value;
  const forgotpass=this.forgotform1.controls['forgotuser'].value;
  this.forgotserv.forgotuser(forgotmail,forgotpass);
}

}
