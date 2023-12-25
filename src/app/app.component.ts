import { Component, Input, ViewEncapsulation,OnInit, AfterViewInit } from '@angular/core';
import { LogincredentialsService } from './logincredentials.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OrderintervalService } from './orderinterval.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit,AfterViewInit {
//navbarvisibility variable
  navopen1:boolean=true;
  title:any="jeeva";
  footerClose:Boolean=true;
  loading:boolean=true;
  currentPageEmail:any;
  currentPageOrder:any;
  dummycontent:any;
  wildcard:any;
  routeCheck:any;
  childrenRoute:any=[];
  checkChildren:any;
  i:any=0;
  constructor(private navopen:LogincredentialsService,private router:Router,private orderInterval:OrderintervalService,private activeroute:ActivatedRoute){


    this.activeroute.queryParamMap.subscribe(params=>{
      this.currentPageEmail=params.get('email');
      this.currentPageOrder=params.get('order-id');
    })

  //This block is used to hide the navbar for the particular component when it is not required
    router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        this.wildcard=this.router.config.some(route =>{
          this.childrenRoute=route.children;
          var childrensplit=val.url.split("/");
          console.log(this.childrenRoute);
          if(this.childrenRoute!=undefined){
            for(var i=1;i<this.childrenRoute.length;i++){
              var childpath=this.childrenRoute[i].path;
              for(var j=0;j<childrensplit.length;j++){
                // console.log(childrensplit[j]);
                // console.log(childpath);
                if(childpath==childrensplit[j]){
                  console.log("jeeva");
                  this.routeCheck=true;
                  break;
                }
              }
            }
            console.log(this.routeCheck);
            return this.routeCheck;
          }
          else{
            return "/"+route.path == val.url;
          }

        })
          // console.log(this.childrenRoute);
        // if(this.childrenRoute){
        //   for(var i=0;i<this.childrenRoute.length;i++){
        //     console.log(this.childrenRoute);
        //     console.log("/"+this.childrenRoute[i].path==val.url);
        //     console.log(val.url);
        //     this.checkChildren="/"+this.childrenRoute[i].path==val.url;
        //   }
        // }

        // console.log(val.url);
        if(val.url=='/login'){
          // console.log(this.dummycontent);
          // console.log(val.url);
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/register'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/forgot1'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/forgotnew'){
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
        else if(val.url=='/terms'){
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
        else if(val.url=='/userorderfeedback'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/userorderfeedback?email='+this.currentPageEmail+'&order-id='+this.currentPageOrder){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/admin/offersmanagement'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(val.url=='/adminvarientmanagement'){
          this.navopen1=false;
          this.footerClose=false
        }
        else if(val.url=='/adminreview'){
          this.navopen1=false;
          this.footerClose=false;
        }
        else if(!this.wildcard){
          this.navopen1=false;
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

  ngAfterViewInit(){
    window.onload=()=>{
      this.loading=false;
    }
  }
}
