import { Component, OnInit } from '@angular/core';
import { OrderbookingService } from '../orderbooking.service';

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
  status:boolean=true; boolstatus:boolean=true; range:boolean=true;
  use:any; usestore:any
  specselect:any;
  spec1:any;
  spec2:any;
  price:any;
  vname:any;
  path:any; path1:any; path2:any; colorchgpath:any;
  showcase:any;
  check:Boolean=false;
  border:any;

  constructor(private service:OrderbookingService){
    this.storeparse=localStorage.getItem('orderpage1');
    this.useval=JSON.parse(this.storeparse);
    // console.log(this.useval);
    // console.log(this.useval.varients[0].vname);
    this.vname=this.useval.varients[0].vname.split(' ').join("");
    console.log(this.vname);
    this.showcase="../../assets/EV mart/"+this.vname+"/display1.webp";
    sessionStorage.setItem('varient_image',this.showcase);
    // console.log(this.showcase);
    // this.colorindex=this.useval.div
    this.path=this.useval.div[0].color;
    console.log(this.path);
    this.path1=this.path.split(this.vname+'/');
    console.log(this.path1);
    this.path2=this.path1[1].split('.png');
    this.colorindex=this.path2[0];
    sessionStorage.setItem('varient_Color',this.colorindex);
    // console.log(this.vname);
    // console.log(this.useval);
    this.spec=this.useval[this.vname];
    sessionStorage.setItem('Spec',JSON.stringify(this.spec[0]));
    // console.log(this.spec);
    this.price=this.spec[0].price;
    this.varients=this.useval.varients;
    sessionStorage.setItem('varient_name',this.varients[0].vname);
    this.loop=this.useval.div;
    // console.log(this.div);


    // this.div=document.getElementById("var0");
    // this.div.style.background='red'
  }

  checked(e:any){
    console.log("works");
    if(this.spec[0]){
    this.check=!this.check;
    }
  }

  ngOnInit(): void {

  }
  varient(ind:any,vname:any){
    // this.vname=this.useval.varients[ind].vname.split(' ').join("");
    // console.log(this.vname);
    sessionStorage.setItem('varient_name',vname);
    this.boolstatus=false;
    this.show1=localStorage.getItem('varientindex');
    this.show2=document.getElementById("state"+this.show1);
    this.show2.style.border='none';
    this.show2.style.background='white';
    this.use=localStorage.getItem('orderpage1');
    this.usestore=JSON.parse(this.use);
    // console.log(this.usestore);
    this.split1=vname.split(" ");
    this.split2=this.split1.join("");
    // console.log(this.split2);
    this.spec=this.usestore[this.split2];
    sessionStorage.setItem('Spec',JSON.stringify(this.spec[0]));
    // console.log(this.spec);
    this.price=this.spec[0].price;
    this.show=document.getElementById("state"+ind);
    this.show.style.background='#EADDCA';
    this.show.style.border='1px solid green'
    localStorage.setItem('varientindex',ind);
  }
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
  specifications(h:any){
    this.range=false;
    // this.vname=this.useval.varients[h].vname.split(' ').join("");
    // this.spec=this.useval[this.vname];
    // console.log(this.spec);
    // console.log(this.spec[h]);
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
    // if(this.specselect.style.border=='2px solid green'){

    // }
    localStorage.setItem('specification',h);
  }

}

