import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  dataFilter:any=[];
  dataLength:any;
  results:any=[];
  helpform:FormGroup;
  j:any;

  constructor(private logger:LoggerService,private _http:HttpClient,private route:Router,private form:FormBuilder){
    _http.get<any>("http://localhost:3000/faqquestions").subscribe((faqquestion)=>{
      console.log(faqquestion);
      this.faqQuestion=faqquestion;
    })

    this._http.get<any>("http://localhost:3000/helpsearch").subscribe((searchresults)=>{
      this.searchresults=searchresults;
      this.dataLength=this.searchresults.length
      // console.log(searchresults.length);
    })


    this.helpform=this.form.group({
      question:['',Validators.required]
    })

    this.helpform.valueChanges.subscribe(helpchanges=>{
      this.questionFilter(helpchanges.question);
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

  questionFilter(question:any){
    // const find=question.find((value:any)=>{
    //   return question==value.question;
    // })
    for(this.j=0;this.j<this.dataLength;this.j++){
      this.dataFilter[this.j]=this.searchresults[this.j].question;
    }

    if(question.length>0){
      this.results=this.dataFilter.filter((filterdata:any)=>{
        return filterdata.toUpperCase().includes(question.toUpperCase());
      })
    }
    console.log(this.results);
  }

  findResult(resultSearch:any){
    sessionStorage.setItem('helpquestion',resultSearch);
    this.route.navigateByUrl('Helpanswers');
  }

  ngOnInit(): void {
    this.logger.info("EV Help Component initialized..");
  }
}
