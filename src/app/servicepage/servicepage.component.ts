import { Component } from '@angular/core';
import { EvmartserviceService } from '../evmartservice.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.css']
})
export class ServicepageComponent {
  evmartserv:any;
  constructor(private service:EvmartserviceService){
    this.service.serviceget().subscribe((data)=>{
      this.evmartserv=data;
      console.log(this.evmartserv);
    })
  }
  details(take:any){
    this.service.serviceform(take);
  }
}
