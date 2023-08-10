import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-evhelp',
  templateUrl: './evhelp.component.html',
  styleUrls: ['./evhelp.component.css']
})
export class EVhelpComponent implements OnInit{
  answer1:boolean=false;
  answer2:boolean=false;
  answer3:boolean=false;

  constructor(private logger:LoggerService){}

  //Used to show and hide the particular details
  answer(){
    this.answer1=true;
  }
  showanswer1(){
    this.answer2=true;
  }
  showanswer2(){
    this.answer3=true;
  }

  ngOnInit(): void {
    this.logger.info("EV Help Component initialized..");
  }
}
