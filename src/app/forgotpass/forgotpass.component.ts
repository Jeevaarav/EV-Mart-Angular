import { HttpClient } from '@angular/common/http';
import { Component,ViewEncapsulation} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LogincredentialsService } from '../logincredentials.service';
import { ForgotService } from '../forgot.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {
  constructor(private form:FormBuilder,private logincred:LogincredentialsService,private route:Router,private http:HttpClient,private forgotserv:ForgotService){ }
  forgotform1=this.form.group({
    forgotemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    forgotuser:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]]
  })

}
