import { Component } from '@angular/core';

@Component({
  selector: 'app-evhelp',
  templateUrl: './evhelp.component.html',
  styleUrls: ['./evhelp.component.css']
})
export class EVhelpComponent {
  answer1:boolean=false;
  answer2:boolean=false;
  answer3:boolean=false;

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
}
