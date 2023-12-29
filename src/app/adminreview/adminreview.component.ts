import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent {
  userFeedback:any;
  response:any=[];
  feedbacklength:any;

  constructor(private route:Router,private http:HttpClient){
      http.get<any>("http://localhost:3000/adminreview").subscribe((feedback)=>{
        this.userFeedback=feedback;
        this.feedbacklength=feedback.length;
        console.log(this.feedbacklength);
        for(var i=0;i<this.feedbacklength;i++){
          if((this.userFeedback[i].productreact==="Happy" || this.userFeedback[i].productreact==="Really happy" || this.userFeedback[i].productreact==="Alright") && (this.userFeedback[i].qualityreact=="Really happy" || this.userFeedback[i].qualityreact==="Happy" || this.userFeedback[i].qualityreact==="Alright") && (this.userFeedback[i].innovationreact==="Happy" || this.userFeedback[i].innovationreact==="Really happy" || this.userFeedback[i].innovationreact==="Alright") && (this.userFeedback[i].honestyreact==="Happy" || this.userFeedback[i].honestyreact==="Really happy" || this.userFeedback[i].honestyreact==="Alright") && (this.userFeedback[i].moneyreact==="Happy" || this.userFeedback[i].moneyreact==="Really happy" || this.userFeedback[i].moneyreact==="Alright") || (this.userFeedback[i].solutionereact==="Happy" || this.userFeedback[i].solutionereact==="Really happy" || this.userFeedback[i].solutionereact==="Alright") || (this.userFeedback[i].recommendreact==="Happy" || this.userFeedback[i].recommendreact==="Really happy" || this.userFeedback[i].recommendreact==="Alright")
          ){
            this.response[i]="Good Response";
          }
          else{
            this.response[i]="Bad Response";
          }
        }

        console.log(this.response);
      })
  }

  // user review acceptance
  accept(email:any){
    this.http.get<any>("http://localhost:3000/adminreview/"+email).subscribe((reviewdata)=>{
      this.http.post<any>("http://localhost:3000/userreview",reviewdata).subscribe((posted)=>{
        console.log("posted");
        this.http.delete("http://localhost:3000/adminreview/"+email).subscribe((deleted)=>{
          console.log("deleted");
        })
      })
    })
  }

  //logout for admin
  logout(){
    alert("Are you sure want to logout");
    this.route.navigateByUrl('');
  }
}
