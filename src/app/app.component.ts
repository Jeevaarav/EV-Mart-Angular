import { Component, Input, ViewEncapsulation,OnInit } from '@angular/core';
import { LogincredentialsService } from './logincredentials.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title:any;
  navopen1:boolean=true;
  constructor(private navopen:LogincredentialsService,private router:Router){
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url=='/login'){
          console.log(val.url);
          this.navopen1=false;
        }
        else if(val.url=='/login/register'){
          this.navopen1=false;
        }
        else if(val.url=='/login/forgot1'){
          this.navopen1=false;
        }
        else if(val.url=='/login/forgot1/forgotnew'){
          this.navopen1=false;
        }
        else if(val.url=='/bookappointment'){
          this.navopen1=false;
        }
        else if(val.url=='/emailverify'){
          this.navopen1=false;
        }
        else if(val.url=='/bookconfirm'){
          this.navopen1=false;
        }
        else if(val.url=='/admin'){
          this.navopen1=false;
        }
        else if(val.url=='/orderpage'){
          this.navopen1=false;
        }
        else if(val.url=='/admin/adminserv'){
          this.navopen1=false;
        }
        else if(val.url=='/admin/vehiclemanagement'){
          this.navopen1=false;
        }
        else if(val.url=='/admin/adminserv/adminform'){
          this.navopen1=false;
        }
        else if(val.url=='/orderpage/revieworder'){
          this.navopen1=false;
        }
        else if(val.url=='/payment'){
          this.navopen1=false;
        }
        else if(val.url=='/debitcard'){
          this.navopen1=false;
        }
        else if(val.url=='/evmartcenterpayment'){
          this.navopen1=false;
        }
        else if(val.url=='/walletpayment'){
          this.navopen1=false;
        }
        else if(val.url=='/orderconfirmpage'){
          this.navopen1=false;
        }
        else if(val.url=='/oldvehicle'){
          this.navopen1=false;
        }
        else{
          this.navopen1=true;
        }
      }
    });

  }
}
