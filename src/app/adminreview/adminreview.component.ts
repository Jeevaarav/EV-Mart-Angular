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

  constructor(private route:Router,private http:HttpClient){
      http.get<any>("http://localhost:3000/adminreview").subscribe((feedback)=>{
        this.userFeedback=feedback;
      })
  }

  //logout for admin
  logout(){
    alert("Are you sure want to logout");
    this.route.navigateByUrl('');
  }
}
