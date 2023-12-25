import { HttpClient } from '@angular/common/http';
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
  productsFeedback:any="";
  userCheck:any;

  constructor(private route:ActivatedRoute,private form:FormBuilder,private http:HttpClient){
    this.route.queryParamMap.subscribe(params=>{
      this.email=params.get('email');
      this.orderID=params.get('order-id');
    })
  }

  feedbackform=this.form.group({
    userreact:['',Validators.required],
    qualityreact:['',Validators.required],
    innovativereact:['',Validators.required],
    honestyreact:['',Validators.required],
    feedbackmessage:['',Validators.required],
    moneyreact:['',Validators.required],
    solutionreact:['',Validators.required],
    recommendreact:['',Validators.required]
  })


  feedbackSubmission(email:any,order:any){
    console.log(email);
    console.log(order);
    let feedback={
      order:"#"+order,
      productreact:this.feedbackform.controls['userreact'].value,
      qualityreact:this.feedbackform.controls['qualityreact'].value,
      innovationreact:this.feedbackform.controls['innovativereact'].value,
      honestyreact:this.feedbackform.controls['honestyreact'].value,
      moneyreact:this.feedbackform.controls['moneyreact'].value,
      solutionereact:this.feedbackform.controls['solutionreact'].value,
      recommendreact:this.feedbackform.controls['recommendreact'].value,
      message:this.feedbackform.controls['feedbackmessage'].value
    }

    let adminfeedback={
      regemail:email,
      order:"#"+order,
      productreact:this.feedbackform.controls['userreact'].value,
      qualityreact:this.feedbackform.controls['qualityreact'].value,
      innovationreact:this.feedbackform.controls['innovativereact'].value,
      honestyreact:this.feedbackform.controls['honestyreact'].value,
      moneyreact:this.feedbackform.controls['moneyreact'].value,
      solutionereact:this.feedbackform.controls['solutionreact'].value,
      recommendreact:this.feedbackform.controls['recommendreact'].value,
      message:this.feedbackform.controls['feedbackmessage'].value
    }

    this.http.get<any>("http://localhost:3000/Register").subscribe((user)=>{
      const check=user.find((userDetails:any)=>{
          this.userCheck=userDetails;
          return userDetails.regemail==email;
      })
      if(user){
        if(this.userCheck.feedback){
          this.userCheck.feedback.push(feedback);
          this.http.patch<any>("http://localhost:3000/Register/"+email,this.userCheck).subscribe((updatepatch)=>{
            console.log("updated patch");
            this.http.post<any>("http://localhost:3000/adminreview",adminfeedback).subscribe((userreview)=>{
              console.log("posted");
            })
          })
        }
        else{
          this.http.patch<any>("http://localhost:3000/Register/"+email,{feedback:[feedback]}).subscribe((patched)=>{
            console.log("feedback patched");
            this.http.post<any>("http://localhost:3000/adminreview",adminfeedback).subscribe((userreview)=>{
              console.log("posted");
            })
          })
        }
      }
    })

    console.log(feedback);
  }
}
