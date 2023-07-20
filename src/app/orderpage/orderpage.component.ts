import { Component, OnInit } from '@angular/core';
import { OrderbookingService } from '../orderbooking.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  storeimg:any;
  storeparse:any;
  useval:any;
  loop:any;
  imgchange:any;
  showborder:any;
  showborder1:any;
  showborder2:any;
  color:any;
  colorfinal:any;
  colorindex:any;
  varients:any;
  spec:any;
  div:any; show:any;show1:any;show2:any;
  split1:any;split2:any;
  use:any; usestore:any
  specselect:any;
  spec1:any;
  spec2:any;
  price:any;
  vname:any;
  path:any; path1:any; path2:any; colorchgpath:any;
  showcase:any;
  border:any;
  parseOldValue:any;
  OldVehicleDetails:any;
  Exchangeoffer:any;
  usePriceValue:any;
  date:any;
  estimatedDate:any;
  deliveryDate:any;
  userLocalPrice:any;
  exShowroomPrice:any;
  popupVarientName:any;

  status:boolean=true;
  boolstatus:boolean=true;
  range:boolean=true;
  check:Boolean=false;
  showPopUp:Boolean=false;

  constructor(private service:OrderbookingService,private route:Router){
    //displaying the default values for the selection of vehicles
    this.date=new Date();
    console.log(this.date.getDate());
    this.estimatedDate=this.date.setDate(
      this.date.getDate()+4
    )
    this.deliveryDate=formatDate(this.estimatedDate,'dd-MMM-yyyy','en-US','+0530');
    this.storeparse=sessionStorage.getItem('orderpage1');
    this.useval=JSON.parse(this.storeparse);
    this.vname=this.useval.varients[0].vname.split(' ').join("");
    console.log(this.vname);
    this.showcase="../../assets/EV mart/"+this.vname+"/display1.webp";
    sessionStorage.setItem('varient_image',this.showcase);
    this.path=this.useval.div[0].color;
    console.log(this.path);
    this.path1=this.path.split(this.vname+'/');
    console.log(this.path1);
    this.path2=this.path1[1].split('.png');
    this.colorindex=this.path2[0];
    sessionStorage.setItem('varient_Color',this.colorindex);
    this.Exchangeoffer=sessionStorage.getItem('ExchangeValue');
    this.Exchangeoffer=parseInt(this.Exchangeoffer);
    // console.log(this.vname);
    // console.log(this.useval);
    this.spec=this.useval[this.vname];
    // console.log(this.spec);
    this.parseOldValue=sessionStorage.getItem('ExchangeValue');
    this.OldVehicleDetails=JSON.parse(this.parseOldValue);

    if(this.parseOldValue && sessionStorage.getItem('oldVehicleDetails')){
      this.price=parseInt(this.spec[0].price)-parseInt(this.parseOldValue);
      this.price=this.price;
      this.userLocalPrice=parseInt(this.price);
      console.log(this.userLocalPrice);
      this.exShowroomPrice=this.userLocalPrice-5000;
      let spec={
        battery:this.spec[0].battery,
        price:this.price,
        range:this.spec[0].range,
        topspeed:this.spec[0].topspeed
      }
      sessionStorage.setItem('Spec',JSON.stringify(spec));
      console.log(spec);
    }
    else{
    sessionStorage.setItem('Spec',JSON.stringify(this.spec[0]));
    this.price=this.spec[0].price;
    this.price=parseInt(this.price);
    this.usePriceValue=this.spec[0].price;
    this.userLocalPrice=parseInt(this.usePriceValue);
    this.exShowroomPrice=this.userLocalPrice-5000;
    }
    this.varients=this.useval.varients;
    this.popupVarientName=this.useval.varients[0].vname;
    sessionStorage.setItem('varient_name',this.varients[0].vname);
    this.loop=this.useval.div;
    sessionStorage.setItem('varientindex',"0");
    sessionStorage.setItem('index',"0")
  }

  //These blocks are used to show and hide the content
  hidePopUp(){
    this.showPopUp=false;
  }
  showVarientPrice(){
    this.showPopUp=true;
  }

  //checkbox for terms and conditions
  checked(e:any){
    console.log("works");
    if(this.spec[0]){
    this.check=!this.check;
    }
  }

  ngOnInit(): void {

  }

  //varient or model selection
  varient(ind:any,vname:any){
    sessionStorage.setItem('varient_name',vname);
    this.boolstatus=false;
    this.show1=sessionStorage.getItem('varientindex');
    console.log(this.show1);
    this.show2=document.getElementById("state"+this.show1);
    this.show2.style.border='none';
    this.show2.style.background='white';
    this.use=sessionStorage.getItem('orderpage1');
    this.usestore=JSON.parse(this.use);
    this.split1=vname.split(" ");
    this.split2=this.split1.join("");
    this.spec=this.usestore[this.split2];
    this.popupVarientName=this.useval.varients[ind].vname;

    this.price=this.spec[0].price;
      if(this.parseOldValue && sessionStorage.getItem('oldVehicleDetails')){
        this.price=parseInt(this.spec[0].price)-parseInt(this.parseOldValue);
        this.price=this.price;
        this.usePriceValue=this.price;
        this.userLocalPrice=parseInt(this.usePriceValue);
        this.exShowroomPrice=this.userLocalPrice-5000;
        let specchange={
        battery:this.spec[0].battery,
        price:this.price.toString(),
        range:this.spec[0].range,
        topspeed:this.spec[0].topspeed
        }
        sessionStorage.setItem('Spec',JSON.stringify(specchange));
        console.log(this.price);
      }
      else{
        this.price=this.spec[0].price;
        this.price=parseInt(this.price);
        sessionStorage.setItem('Spec',JSON.stringify(this.spec[0]));
        this.userLocalPrice=parseInt(this.price);
        this.exShowroomPrice=this.userLocalPrice-5000;
      }
    this.show=document.getElementById("state"+ind);
    this.show.style.background='#EADDCA';
    this.show.style.border='1px solid green';
    sessionStorage.setItem('varientindex',ind);
  }

  //  used for color change of vehicle
  colorchange(index:any,color:any){
    this.colorchgpath=this.useval.varients[0].vname;
    this.imgchange=document.getElementById("changeimg");
    this.status=false;
    this.showborder1=sessionStorage.getItem('index');
    if(this.showborder1==null){
      sessionStorage.setItem('index',index);
    this.showborder1=sessionStorage.getItem('index');
    }
    console.log(index);
    console.log(this.imgchange);
    this.showborder2=document.getElementById("wave"+this.showborder1);
    console.log(this.showborder2);
    this.showborder2.style.outline='none';
    this.color=color.split(this.vname+'/');
    console.log(this.color);
    this.colorfinal=this.color[1].split('.png');
    this.colorindex=this.colorfinal[0];
    sessionStorage.setItem('varient_Color',this.colorindex);
    console.log(index);

    this.showborder=document.getElementById("wave"+index);
    console.log(this.showborder);
    sessionStorage.setItem('index',index);
    this.showborder.style.outline='4px solid green';
    this.showborder.style.outlineOffset='5px';
    this.imgchange.src=this.useval.displayimg[index].img;
    sessionStorage.setItem('varient_image',this.imgchange.src);
  }

  //used for selecting the specifications from the model
  specifications(h:any){
    this.range=false;
    sessionStorage.setItem('Spec',JSON.stringify(this.spec[h]));
    this.price=this.spec[h].price;
    this.spec1=localStorage.getItem('specification');
    this.spec2=document.getElementById("spec"+this.spec1);
    this.spec2.style.background='#EADDCA';
    this.spec2.style.border='none';
    this.specselect=document.getElementById("spec"+h);
    this.specselect.style.background='white';
   this.border=this.specselect.style.border='2px solid green';
   console.log(this.border);
    localStorage.setItem('specification',h);
  }

  backToProduct(){
    this.route.navigateByUrl('Product').then(()=>{
      window.location.reload();
    });
  }

}

