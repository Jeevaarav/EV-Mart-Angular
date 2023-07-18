import { Component } from '@angular/core';
import { LogincredentialsService } from '../logincredentials.service';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.css']
})
export class EmailverificationComponent {
  constructor(private loginserv:LogincredentialsService){}

  //Used for display the videos of the particular vehicles
  imagechange:any=["../../assets/EV mart/OLA video.gif","../../assets/EV mart/Ather video.gif","../../assets/EV mart/Ampere video.gif","../../assets/EV mart/Revolt video.gif"];
  change:any="../../assets/EV mart/OLA video.gif";
  Ola(){
    this.change=document.getElementById("olaimg");
    return this.change=this.imagechange[0];
  }
  Ather(){
    this.change=document.getElementById("olaimg");
    return this.change=this.imagechange[1];
  }
  Ampere(){
    this.change=document.getElementById("olaimg");
    return this.change=this.imagechange[2];
  }
  Revolt(){
    this.change=document.getElementById("olaimg");
    return this.change=this.imagechange[3];
  }
  
   //Used for resending the mail which is called in the service.
  sendmail(){
    this.loginserv.resendemail();
  }
}
