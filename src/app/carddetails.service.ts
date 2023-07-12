import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarddetailsService {

  constructor(private _http:HttpClient) { }

  getvisaDetails(){
    return this._http.get("http://Localhost:3000/Visa");
  }
  getmasterDetails(){
    return this._http.get("http://Localhost:3000/Mastercard");
  }
  getPaymentupi(){
    return this._http.get("http://Localhost:3000/paymentUPI");
  }
}
