import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-typesof-ev',
  templateUrl: './typesof-ev.component.html',
  styleUrls: ['./typesof-ev.component.css']
})
export class TypesofEVComponent implements OnInit {
  constructor(private logger:LoggerService){}
  ngOnInit(): void {
    this.logger.info("Types of EV Component initialized..");
  }
}
