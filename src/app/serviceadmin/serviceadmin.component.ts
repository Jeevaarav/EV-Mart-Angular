import { Component } from '@angular/core';
import { EvmartserviceService } from '../evmartservice.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-serviceadmin',
  templateUrl: './serviceadmin.component.html',
  styleUrls: ['./serviceadmin.component.css']
})
export class ServiceadminComponent {
  evmartserv:any;
  color:any;
  constructor(private service:EvmartserviceService,private reply:AdminService){
    this.service.retrieveserv().subscribe((data)=>{
      this.evmartserv=data;
      console.log(this.evmartserv[1].Reply);
      for(var i=0;i<=data.length;i++){
      if(this.evmartserv[i].Reply!=null){
        this.color=document.getElementsByTagName('div');
        console.log(this.color);
        this.color.style.backgroundColor='Red';
        }
      }
    });

  }
  details(take:any){
    this.reply.replyform(take);
  }
}
