import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ExchangeComponent {
  colordiv:any;
  colordiv1:any;
  colordiv2:any;
  i:any;
  time=0;
  dots:any;

  constructor(private route:Router){
    // setInterval(()=>{
    //   this.time=this.time+12500;
    // console.log(this.time);
    //   this.firstdiv();
    // },this.time)

    }

  slides = [
    { img: "../assets/EV mart/offer slide.jpg"},
    { img: "../assets/EV mart/exchange_4.webp"},
    { img: "../assets/EV mart/offers3.jpg"}
  ];
  slideConfig = {
    dots:true,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed":2500,
    "infinite":true,
    verticalSwiping:true,
    dotsClass:'changediv',
    vertical:true,
    pauseOnHover:false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  firstdiv(){
    this.colordiv=document.getElementById('dotscolor');
      this.colordiv.style.visibility="visible";
    setTimeout(()=>{
      this.colordiv.style.visibility="hidden";
    },2500);
  }

  nextdiv(){
   setTimeout(()=>{
    this.colordiv1.style.visibility="hidden";
    this.nextdiv2();
   },2500);

  }
  nextdiv2(){
    this.colordiv2=document.getElementById('dotscolor2');
    this.colordiv2.style.visibility="visible";
    setTimeout(()=>{
      this.colordiv2.style.visibility="hidden";
     },3000);
  }
  book(){
    this.route.navigateByUrl('/bookappointment');
  }
}

