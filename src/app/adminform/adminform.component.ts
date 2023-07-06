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
    check:any;
    valCheck:any;
    booleanCheck:any;
    datecheck:Boolean=false; timeCheck:Boolean=false;
    takeDate:any;
    currentHour:any;
    currentTime:any;
    currentMinute:any;
    currentSeconds:any;
    splitTime:any;
    booleanDate:any;

  constructor(private service:EvmartserviceService,private formbuild:FormBuilder,private admin:AdminService){
    this.value=sessionStorage.getItem('adminservicedetails');
    // this.val2=localStorage.getItem('replymail');
    this.val3=JSON.parse(this.value);
    console.log(this.checkDate);
  }
  servform=this.formbuild.group({
    Reply:['Thanks for Choosing our Service',Validators.required],
    date:['',[Validators.required,Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
    time:['',Validators.required]
  });


  // validateOldDate(control: FormControl): { [key: string]: boolean } | null {
  //   const inputDate = control.value;

  //   if (this.isDateOld(inputDate)) {
  //     return { oldDate: true };
  //   }

  //   return null;
  // }


  checkDate(dateval:any){
    this.check=new Date();
    this.valCheck=new Date(dateval);
    console.log(this.check);
    console.log(this.valCheck);
    if(this.valCheck > this.check){
      this.booleanCheck=true;
    }
    else{
      this.booleanCheck=false;
    }
  }

  checkTime(time:any){
    this.takeDate=new Date();
    this.currentHour=this.takeDate.getHours();
    this.currentMinute=this.takeDate.getMinutes();
    console.log(time);
    this.splitTime=time.split(':');
    console.log(this.splitTime[0]);
    if(this.splitTime[0]>this.currentHour && this.booleanCheck==true){
      this.booleanDate=true;
    }
    else{
      this.booleanDate=false;
    }
    console.log(this.currentHour);
    console.log(this.currentMinute);
  }

  submit(mail:any,category:any,vehicleno:any,model:any){
    console.log(this.servform.value);
    const reply=this.servform.controls['Reply'].value;
    const date=this.servform.controls['date'].value;
    const time=this.servform.controls['time'].value;
    const email=mail;
    const probcategory=category;
    const vehiclenum=vehicleno;
    const varient=model;

    if(this.booleanCheck==true && this.booleanDate==true){
    this.admin.postdata(email,probcategory,vehiclenum,varient,date,time,reply);
    }
    else{
      if(this.booleanCheck==false){
        this.datecheck=true;
        setTimeout(()=>{
          this.datecheck=false;
        },5000);
      }
      if(this.booleanDate==false){
        this.timeCheck=true;
        setTimeout(()=>{
          this.timeCheck=false;
        },5000);
      }
    }
  }
  }
