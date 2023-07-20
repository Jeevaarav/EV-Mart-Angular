import { Component, Input, ViewEncapsulation,OnInit } from '@angular/core';
import { LogincredentialsService } from './logincredentials.service';
import { NavigationEnd, Router } from '@angular/router';
import { OrderintervalService } from './orderinterval.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit {
//navbarvisibility variable
  navopen1:boolean=true;
  title:any;
  footerClose:Boolean=true;
  constructor(private navopen:LogincredentialsService,private router:Router,private orderInterval:OrderintervalService){

  //This block is used to hide the navbar for the particular component when it is not required
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        if(val.url=='/login'){
          console.log(val.url);
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/login/register'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/login/forgot1'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/login/forgot1/forgotnew'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/bookappointment'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/emailverify'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/bookconfirm'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/admin'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/orderpage'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/admin/adminserv'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/admin/vehiclemanagement'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/admin/adminserv/adminform'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/orderpage/revieworder'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/payment'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/debitcard'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/evmartcenterpayment'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/walletpayment'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/orderconfirmpage'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/oldvehicle'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/userPastorderDetails'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/userDeliveryDetails'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/userNewOrders'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/userService'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/Product'){
          this.footerClose=false;
        }
        else{
          this.navopen1=true;
          this.footerClose=true;
        }
      }
    });

  }

  ngOnInit() {

    //This block is used for run the time intrval for order purposes
    if(sessionStorage.getItem('logmail')){
      this.orderInterval.startInterval();
    }
  }
}
