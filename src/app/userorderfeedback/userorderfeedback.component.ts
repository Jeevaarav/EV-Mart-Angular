import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userorderfeedback',
  templateUrl: './userorderfeedback.component.html',
  styleUrls: ['./userorderfeedback.component.css']
})
export class UserorderfeedbackComponent {
  email:any;
  orderID:any;
  constructor(private route:ActivatedRoute,private form:FormBuilder){
    this.route.queryParamMap.subscribe(params=>{
      this.email=params.get('email');
      this.orderID=params.get('order-id');
    })
  }

  feedbackform=this.form.group({
    feedbackmessage:['',Validators.required],
    moneyreact:['',Validators.required],
    solutionreact:['',Validators.required]
  })

  feedbackSubmission(){
    console.log(this.feedbackform.value);
  }

  moneyreaction(value:any){
    
  }
}
