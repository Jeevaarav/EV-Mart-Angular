import { Component, ViewEncapsulation } from '@angular/core';
import { EvmartserviceService } from '../evmartservice.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicesform',
  templateUrl: './servicesform.component.html',
  styleUrls: ['./servicesform.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServicesformComponent {
  value:any;
  val2:any;
constructor(private service:EvmartserviceService,private formbuild:FormBuilder){
  this.value=localStorage.getItem('serviceform');

}
servform=this.formbuild.group({
  Email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
  User:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]],
  problem:['',[Validators.required,Validators.minLength(150)]]
});

submit(category:any){
  this.service.storedata(this.servform.value,category);
}
}
