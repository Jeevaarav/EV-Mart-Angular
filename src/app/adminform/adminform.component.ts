import { Component, ViewEncapsulation } from '@angular/core';
  import { EvmartserviceService } from '../evmartservice.service';
  import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent {
    value:any;
    val2:any;
    val3:any;
    mail:any;
  constructor(private service:EvmartserviceService,private formbuild:FormBuilder,private admin:AdminService){
    this.value=localStorage.getItem('serviceform');
    this.val2=localStorage.getItem('replymail');
    this.val3=JSON.parse(this.val2);
  }
  servform=this.formbuild.group({
    Reply:['',Validators.required],
    date:['',Validators.required],
    time:['',Validators.required]
  });

  submit(mail:any){
    const reply=this.servform.controls['Reply'].value;
    const date=this.servform.controls['date'].value;
    const time=this.servform.controls['time'].value;
    this.admin.patchdata(mail,reply,date,time);
  }
  }
