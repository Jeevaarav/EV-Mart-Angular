import { Component } from '@angular/core';
import { EvmartserviceService } from '../evmartservice.service';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { LogincredentialsService } from '../logincredentials.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serviceadmin',
  templateUrl: './serviceadmin.component.html',
  styleUrls: ['./serviceadmin.component.css']
})
export class ServiceadminComponent {
  evmartserv:any;
  color:any;
  emptyimg:boolean=false;
  date:any;
  dateFormat:any=[];
  i:any;
  splitDate:any;
  acceptedService:Boolean=false;
  serviceDone:any;

  constructor(private service:EvmartserviceService,private reply:AdminService,private route:Router,private http:HttpClient){
    this.service.retrieveserv().subscribe((data)=>{
      this.evmartserv=data;
      console.log(this.evmartserv.length);
      for(this.i=0;this.i<this.evmartserv.length;this.i++){
        this.splitDate=this.evmartserv[this.i].date.split('T')
        console.log(this.splitDate);
        this.dateFormat[this.i]=this.splitDate[0];
      }
      console.log(this.dateFormat);
      if(this.evmartserv.length==0){
        this.emptyimg=true;
      }
      else{
        this.emptyimg=false;
      }
    });

    this.http.get<any>("http://localhost:3000/servicedone").subscribe((servicedone)=>{
      this.serviceDone=servicedone;
      console.log(this.serviceDone);
      if(this.serviceDone.length==0){
        this.acceptedService=true;
        console.log(this.acceptedService);
      }
      else{
        this.acceptedService=false;
        console.log(this.acceptedService);
      }
    })

  }
  details(index:any){
    console.log(this.evmartserv[index]);
    sessionStorage.setItem('adminservicedetails',JSON.stringify(this.evmartserv[index]));
  }
  logout(){
    alert("Are you sure want to logout");
    this.route.navigateByUrl('');
  }
}
