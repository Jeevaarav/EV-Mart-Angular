import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  constructor(private logger:LoggerService){}
ngOnInit(): void {
  this.logger.info("Information Page initialized..");
}
}
