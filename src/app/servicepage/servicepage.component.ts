import { Component, OnInit } from '@angular/core';
import { EvmartserviceService } from '../evmartservice.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.css']
})
export class ServicepageComponent implements OnInit{
  evmartserv:any;

  constructor(private service:EvmartserviceService,private logger:LoggerService){
    //service available data
    this.service.serviceget().subscribe((data)=>{
      this.evmartserv=data;
    })
  }

  //take particular service details
  details(take:any){
    this.service.serviceform(take);
  }

  ngOnInit(): void {
    this.logger.info("Service page Component initialized..");
  }
}
