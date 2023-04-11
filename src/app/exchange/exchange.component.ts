import { Component } from '@angular/core';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent {
  imageObject: Array<object> = [{
    image:"../../assets/EV mart/offer slide.jpg",
    alt:"slide 1",
    order:1
  },
{
  image:"../../assets/EV mart/exchange_4.webp",
  alt:"slide 2",
  order:2
}]
}
