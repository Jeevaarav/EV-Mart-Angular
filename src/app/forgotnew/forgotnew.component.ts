import { Component, ViewEncapsulation } from '@angular/core';
import { ForgotService } from '../forgot.service';
import { FormBuilder, Validators } from '@angular/forms';
import * as alertifyjs from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotnew',
  templateUrl: './forgotnew.component.html',
  styleUrls: ['./forgotnew.component.css'],
  encapsulation:ViewEncapsulation.None,
  styles:[`.forgotnew input.ng-invalid && .forgotnew input.ng-dirty{border:2px solid red}`,`forgotnew input.ng-valid{border:2px solid green}`]
})
export class ForgotnewComponent {
  inputmsg:any=this.forgot.inputval;
  constructor(private forgot:ForgotService,private formbuilder:FormBuilder,private routes:Router){
  }
  forgotnew=this.formbuilder.group({
    forpass:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
    confirmpass:['',Validators.required]
  });
  changepass(a:any){
    console.log(this.forgotnew.value);
    this.forgot.changepassword(this.forgotnew.value,a);
  }

}
