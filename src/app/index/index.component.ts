import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  images = [
    { img: "../assets/EV mart/OlA.png",title:"OLA S1",price:"99,999/-",span1:"181 km ARAI certified range",span2:"10 stunning colors",span3:"116kmph top speed" },
    { img: "../assets/EV mart/Revolt.png",title:"Revolt",price:"1,30,892/-",span1:"150 km ARAI certified range",span2:"3 stunning colors",span3:"85kmph top speed" },
    { img: "../assets/EV mart/Ather.png",title:"Ather",price:"1,34,147/-",span1:"105 km certified range",span2:"3 stunning colors",span3:"80kmph top speed" },
    { img: "../assets/EV mart/Hero electric.png",title:"Hero Electric",price:"86,540/-" ,span1:"138 km certified range",span2:"2 stunning colors",span3:"42kmph top speed"},
    { img: "../assets/EV mart/ampere-removebg-preview.png",title:"Ampere",price:"61,993",span1:"120 km certified range",span2:"3 stunning colors",span3:"50kmph top speed" },
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed":1500,
    "infinite":true,
    "dots":true,
    centerMode: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
}
