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
logbtn:boolean=true;
close:any="close";
reguser:any;
dropdown:boolean=false;
constructor(private form:FormBuilder,private service:LogincredentialsService,private route:Router){
  this.reguser=localStorage.getItem('reguser');
  console.log(localStorage.getItem('loggedin'));
  if(localStorage.getItem('loggedin')=='true'){
    this.btn=true;
    this.logbtn=false;
    }
    else{
      this.btn=false;
      this.logbtn=true;
    }
 }

// forgotform1=this.form.group({
//   forgotemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
//   forgotuser:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]]
// })
logout(){
  if(confirm("Are you sure want to log-out?")){
  this.dropdown=false;
  localStorage.setItem('loggedin','false');
  localStorage.removeItem('reguser');
  this.route.navigateByUrl("").then(()=>{
    window.location.reload();
  });
}
else{
  console.log(this.logbtn);
}

}

drop(){
    this.dropdown=true;
}
menuClose(){
  this.dropdown=false;
}
myaccount(){
  this.dropdown=false;
  this.route.navigateByUrl('/Profile').then(()=>{
    window.location.reload();
  });
}

}
