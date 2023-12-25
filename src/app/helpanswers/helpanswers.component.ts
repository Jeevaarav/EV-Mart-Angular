import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-helpanswers',
  templateUrl: './helpanswers.component.html',
  styleUrls: ['./helpanswers.component.css']
})
export class HelpanswersComponent {
  question:any;
  searchresults:any;
  dataLength:any;
  answer:any;
  constructor(private _http:HttpClient){
    this.question=sessionStorage.getItem('helpquestion');
    this._http.get<any>("http://localhost:3000/helpsearch").subscribe((searchresults)=>{
      this.searchresults=searchresults;
      this.dataLength=this.searchresults.length
      const check=searchresults.find((value:any)=>{
        this.answer=value.answer;
        return this.question.toUpperCase()==value.question.toUpperCase();
      })
      if(check){
        console.log(this.answer);
      }
      console.log(searchresults);
    })
  }

  questionanswer(question:any){
    this.question=question;
    this._http.get<any>("http://localhost:3000/helpsearch").subscribe((searchresults)=>{
      this.searchresults=searchresults;
      this.dataLength=this.searchresults.length
      const check=searchresults.find((value:any)=>{
        this.answer=value.answer;
        return question.toUpperCase()==value.question.toUpperCase();
      })
      if(check){
        console.log(this.answer);
      }
      console.log(searchresults);
    })
  }
}
