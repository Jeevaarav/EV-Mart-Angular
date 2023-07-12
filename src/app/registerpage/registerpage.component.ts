import { HttpClient } from '@angular/common/http';
import { Component,ViewEncapsulation} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { LogincredentialsService } from '../logincredentials.service';
import { ForgotService } from '../forgot.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css'],
  encapsulation:ViewEncapsulation.None,
  styles:[`.regform input.ng-valid{border: 2px solid green}`,`.regform input.ng-invalid && .regform input.ng-dirty{border:2px solid red}`,
  `.logform input.ng-valid{border: 2px solid green}`,`.logform input.ng-invalid && .regform input.ng-dirty{border:2px solid red}`,
  `.subform input.ng-invalid{border: none}` ]
})
export class RegisterpageComponent {
  errorfill:any="";
  call:any="";
  field:boolean=true;
  field2:boolean=true;
  constructor(private form:FormBuilder,private logincred:LogincredentialsService,private route:Router,private http:HttpClient,private forgotserv:ForgotService){
    setInterval(()=>{
      this.call=this.logincred.regcheck;
    });
  }
  register=this.form.group({
    regemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    reguser:['',[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
    regpass:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
    regphone:['',[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]],
    regconfirm:['',Validators.required]
  });

  regdetails(){
    const email=this.register.controls['regemail'].value;
    const username=this.register.controls['reguser'].value;
    const password=this.register.controls['regpass'].value;
    const confirm=this.register.controls['regconfirm'].value;
    const phone=this.register.controls['regphone'].value;

    if(confirm==password){
    this.logincred.registrationcheck(email,username,password,confirm,phone);
    this.register.reset();
    }
    else{
      alert("Password does not match");
    }

    // this.logincred.savedata(this.register.value).subscribe(()=>{
    //   alert("Thanks for registering EV Mart, Let's experience the EV world");
    //   this.route.navigateByUrl('/login');
    // });

  }
  fill(a:any,b:any,c:any,d:any){
    if(a=="" || b=="" || c=="" || d==""){
      this.errorfill="Please fill the blanks";
      setTimeout(()=>{
        this.errorfill="";
      },1500);
    }
    else{
      this.errorfill="";
    }
  }

  togglefunction(){
    this.field=!this.field;
  }

  togglepass(){
    this.field2=!this.field2;
  }
}


























// customPatternValidator(control:AbstractControl): ValidationErrors | null{
//   const pattern1=/^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
//   const pattern2=/^(?!.*(.).*\\1{3})/
//   const value=control.value;

//   if(value && !pattern1.test(value)){
//     return {invalidPattern:'Username should start with a letter, contain only alphanumeric characters'};
//   }
//   if(value && !pattern2.test(value)){
//     return {invalidPattern:'Do not use repetitive characters'};
//   }
//   return null;
// }