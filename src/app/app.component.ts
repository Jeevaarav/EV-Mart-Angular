import { Component, Input, ViewEncapsulation,OnInit } from '@angular/core';
import { LogincredentialsService } from './logincredentials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title:any;
  opennav:boolean=true;
  constructor(private navopen:LogincredentialsService){
    setInterval(()=>{
      if(this.navopen.closenav==false)
    {
      this.opennav=false;
    }
    else{
      this.opennav=true;
    }
    },1000);

  }
}
