import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evhelp',
  templateUrl: './evhelp.component.html',
  styleUrls: ['./evhelp.component.css']
})
export class EVhelpComponent implements OnInit{
  answerShow:boolean[]=[false];
  faqQuestion:any;
  checkIndex:any;
  count:any=0;
  helpque:any;
  errormsg:any="";
  submitForm:any;
  searchresults:any;
  showsearch:boolean=false;

  constructor(private logger:LoggerService,private _http:HttpClient,private route:Router){
    _http.get<any>("http://localhost:3000/faqquestions").subscribe((faqquestion)=>{
      console.log(faqquestion);
      this.faqQuestion=faqquestion;
    })

    _http.get<any>("http://localhost:3000/helpsearch").subscribe((searchresults)=>{
    this.searchresults=searchresults;
    })
  }

  //Used to show and hide the particular details
  answer(index:any){
    this.answerShow=[false];
    if(this.checkIndex==index){
      if(this.count<2){
      this.answerShow[this.checkIndex]=false;
      this.count++;
    }
    else{

      // this.answerShow[index]=true;
      // this.count=0;
      // this.checkIndex=index;
    }
  }

    else{
    this.answerShow[index]=true;
    this.count++;
    }
    this.checkIndex=index;

  }

  // Submit help question to search in DB
  submitHelp(submitque:any){
    if(submitque==""){
      this.errormsg="Please fill the input";
      setTimeout(()=>{
        this.errormsg=""
      },2500)
    }
    else{
      this.errormsg="";
    }
  }

  helpsearch(helpsearch:any){
    if(helpsearch==""){
      this.showsearch=false;
    }
    else{
      console.log(helpsearch);
      this.showsearch=true;
    }

  }

  ngOnInit(): void {
    this.logger.info("EV Help Component initialized..");
  }
}
