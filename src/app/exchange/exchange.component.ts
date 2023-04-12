import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ExchangeComponent {
  slides = [
    { img: "../assets/EV mart/offer slide.jpg"},
    { img: "../assets/EV mart/exchange_4.webp"},
    { img: "../assets/EV mart/offers.jpeg"}
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed":2500,
    "infinite":true,
    "dots":true,
    verticalSwiping:true,
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
}

