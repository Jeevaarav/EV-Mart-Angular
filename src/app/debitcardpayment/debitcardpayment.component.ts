import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { CarddetailsService } from '../carddetails.service';
import { formatDate } from '@angular/common';
import { FillbookdetailsService } from '../fillbookdetails.service';
import { HttpClient } from '@angular/common/http';
import { debitcard } from '../fillbooking.guard';
import { url } from 'src/environments/environment';


@Component({
  selector: 'app-debitcardpayment',
  templateUrl: './debitcardpayment.component.html',
  styleUrls: ['./debitcardpayment.component.css']
})
export class DebitcardpaymentComponent implements debitcard {
    orderedVehicleImage:any;
    orderedVehicleName:any;
    myform:FormGroup;
    visa:any;
    mastercard:any;
    displayBank:any;
    showCardType="fa-solid fa-credit-card";
    cardColor:any='#666';
    bankNotFound:any="";
    expiryDate:any;
    formatDate:any;
    timeTaken:any;
    splitMonth:any;
    splitYear:any;
    splitInputMonth:any;
    splitInputYear:any;
    cardExpires:any="";
    getCarddetails:any;
    expiryDateStore:any=0;
    getCardNumber:any;
    replaceCardNumber:any="";
    encryptNumber:any="";
    splitLastdigit:any;
    encryptCardNumber:any;
    findCardType:any;
    varientAmount:any;
    orderConfirmcount:any=0;

    splitCardNumber:any=[];

    masterCardImage:Boolean=false;
    cardIcon:Boolean=true;

    constructor(private formName:FormBuilder,private cardType:CarddetailsService,private fillDetails:FillbookdetailsService,private _http:HttpClient){
      this.varientAmount=sessionStorage.getItem('Amount');
      this.orderedVehicleImage=sessionStorage.getItem('varient_image');
      this.orderedVehicleName=sessionStorage.getItem('varient_name');

      this.cardType.getvisaDetails().subscribe(x=>{
        this.visa=x;
      })
      this.cardType.getmasterDetails().subscribe(y=>{
        this.mastercard=y;
      })

      //Validating the input
      this.myform=formName.group({
        input:['',[Validators.required,Validators.pattern("^[45][0-9]{15}$")]],
        CVV:['',[Validators.required,Validators.pattern("[0-9]{1,4}")]],
        expiry:['',[Validators.required,Validators.pattern("(0[1-9]|1[0-2])\/\\d{2}")]],
        cardholder:['',Validators.required]
      })

      //Check dynamically value changes
      this.myform.valueChanges.subscribe(x=>{
        this.cardValidation(x.input);
      })


    }

    //canDeactivate used to protect the page before leaving
    canExit(){
      if(this.orderConfirmcount>0){
        return true;
      }
      else if(confirm("You want to leave the page? It will lost your data")){
        return true;
      }
      else{
        return false;
      }
    }

    //Expiry date validation to check the card validity
    expiryDateValidate(inputexpirydate:any){
      this.expiryDate=new Date();
      this.timeTaken=this.expiryDate.getTime();
      console.log(formatDate(this.timeTaken, 'MM/YY', 'en-US', '+0530'));
      this.formatDate=(formatDate(this.timeTaken, 'MM/YY', 'en-US', '+0530'));

        this.splitMonth=this.formatDate.split('/');
        console.log(this.splitMonth);
        if(inputexpirydate.length==5){
          this.splitInputMonth=inputexpirydate.split('/');
          if(this.splitInputMonth[1]>=this.splitMonth[1]){
            if(this.splitInputMonth[1]==this.splitMonth[1] && this.splitInputMonth[0]<this.splitMonth[0]){
              this.cardExpires="Card Expires";
              console.log("inside fails");
              this.expiryDateStore=0;
              console.log(this.expiryDateStore);
            }
            else{
              this.expiryDateStore++;
              console.log(this.expiryDateStore);
              this.cardExpires="";
              console.log("success");
            }
          }
          else{
            this.expiryDateStore=0;
            console.log(this.expiryDateStore);
            this.cardExpires="Card Expires";
            console.log("fails");
          }
        }
      }

  //This block is used to check the cardtype of the input
    cardValidation(number:any){
      if(number[0]=="4"){
        this.findCardType="Visa";
        this.showCardType="fa-brands fa-cc-visa";
        this.cardColor="#1565c0";
        for(var i=0;i<this.visa.length;i++){
          if(number.includes(this.visa[i].binNumber)){
            this.displayBank=this.visa[i].bankname;
            console.log(this.visa[i].bankname);
            break;
          }
          else{
            if(i==this.visa.length-1){
              if(number.length==16){
                this.bankNotFound="Enter valid card number";
                console.log("wrong Bin Number");
              }
              else{
                this.bankNotFound="";
              }
            }

          }
        }
      }
      else if(number[0]=="5"){
        this.findCardType="Mastercard";
        this.cardIcon=false;
        this.masterCardImage=true;
        for(var i=0;i<this.mastercard.length;i++){
          if(number.includes(this.mastercard[i].binNumber)){
            this.displayBank=this.mastercard[i].bankname;
            console.log(this.mastercard[i].bankname);
            break;
          }
          else{
            if(i==this.mastercard.length-1){
              if(number.length==16){
                this.bankNotFound="Enter valid card number";
                console.log("wrong Bin Number");
              }
              else{
                this.bankNotFound="";
              }
            }

          }
        }
      }
      else{
        this.expiryDateStore=0;
        this.bankNotFound="";
        this.displayBank="";
        this.cardIcon=true;
        this.masterCardImage=false;
        this.showCardType="fa-solid fa-credit-card";
        this.cardColor="#666";
        console.log("invalid card number");
        this.cardExpires="";
  }
  }

  // To get the Order Details after submission of form to send through service and store the card Details
  getDebitCard(){
    this.orderConfirmcount++;
    if(this.expiryDateStore==1){
      const cardholdername=this.myform.controls['cardholder'].value.toUpperCase();
      this.getCarddetails="Debit Card";
      this.getCardNumber=this.myform.controls['input'].value;
      console.log(this.getCardNumber.length);
      this.splitCardNumber=this.getCardNumber.substring(0,12);
      this.splitLastdigit=this.getCardNumber.substring(12,16);
      console.log(this.splitCardNumber);
      for(var i=0;i<this.splitCardNumber.length;i++){
        console.log(this.splitCardNumber[i]);
        this.replaceCardNumber=this.splitCardNumber.charAt(i);
        this.encryptNumber+=this.replaceCardNumber.replace(this.replaceCardNumber,"X");
      }
      this.encryptCardNumber=this.encryptNumber.concat(this.splitLastdigit);
      console.log(this.encryptCardNumber);

      this._http.get<any>(url.customerDetails).subscribe((paymentdetails)=>{
      const user=paymentdetails.find((getDetails:any)=>{
        return getDetails.regemail==sessionStorage.getItem('logmail');
      })
      if(user){
        this._http.patch("http://localhost:3000/Register/"+sessionStorage.getItem('logmail'),{paymentcard:[{cardnumber:this.encryptCardNumber,cardholdername:cardholdername,cardtype:this.findCardType}]}).subscribe(()=>{
          console.log("Success");
        })
      }
      })
      this.fillDetails.orderbooked(this.getCarddetails);
    }
  }
  }
