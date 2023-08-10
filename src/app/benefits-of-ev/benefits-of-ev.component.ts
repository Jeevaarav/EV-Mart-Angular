import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-benefits-of-ev',
  templateUrl: './benefits-of-ev.component.html',
  styleUrls: ['./benefits-of-ev.component.css']
})
export class BenefitsOfEVComponent implements OnInit{
  constructor(private logger:LoggerService){}
ngOnInit(): void {
  this.logger.info("Benefits of EV Component initialized..");
}
}
