import { HttpClient } from '@angular/common/http';
import { Component,ViewEncapsulation} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LogincredentialsService } from '../logincredentials.service';
import { ForgotService } from '../forgot.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  styles:[`.regform input.ng-valid{border: 2px solid green}`,`.regform input.ng-invalid && .regform input.ng-dirty{border:2px solid red}`,
  `.logform input.ng-valid{border: 2px solid green}`,`.logform input.ng-invalid && .regform input.ng-dirty{border:2px solid red}`,
  `.subform input.ng-invalid{border: none}` ],
  encapsulation:ViewEncapsulation.None
})
export class LoginpageComponent {
  msg:any="";
  constructor(private form:FormBuilder,private logincred:LogincredentialsService,private route:Router,private http:HttpClient,private forgotserv:ForgotService){ }
login=this.form.group({
  email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]]
});
check(a:any,b:any){
  if(a=="" && b==""){
    this.msg="Please fill the blanks";
  }
  else{
    this.msg="";
  }
}
logdetails(){
  const email=this.login.controls['email'].value;
  const password=this.login.controls['password'].value;
  this.logincred.retrievedata(email,password);
  this.login.reset();
}
}
