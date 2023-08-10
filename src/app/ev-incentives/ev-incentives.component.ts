import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-ev-incentives',
  templateUrl: './ev-incentives.component.html',
  styleUrls: ['./ev-incentives.component.css']
})
export class EVIncentivesComponent implements OnInit {
  constructor(private logger:LoggerService){}
  ngOnInit(): void {
    this.logger.info("EV Incentives component initialized..");
  }
}
