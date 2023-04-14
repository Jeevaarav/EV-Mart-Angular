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
        else{
          this.navopen1=true;
        }
      }
    })
    // setInterval(()=>{
    //   if(this.navopen.closenav==false)
    // {
    //   this.opennav=false;
    // }
    // else{
    //   this.opennav=true;
    // }
    // },1000);

  }
}
