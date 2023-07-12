import { Component } from '@angular/core';
import { EvmartcenterService } from '../evmartcenter.service';
import { FormGroup,FormControl,FormBuilder,Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css'],
  styles:[`.bookform input.ng-invalid && .bookform input.ng-dirty{border:2px solid red}`]
})
export class BookappointmentComponent {
  Monday:any;Tuesday:any;Friday:any;Thursday:any;Saturday:any;
  Mrng:any;Noon:any;Eve:any;
  Dummy:any;Dummy1:any;
  Salem:any;Chennai:any;Madurai:any;Dindugal:any;Kovai:any;
  Salemadd:any;
  show:boolean=false;
  inval:any;
  slotDays:any;
  slottimeperday:any;

  constructor(private service:EvmartcenterService,private form:FormBuilder){
    this.service.slot().subscribe((data)=>{
      this.slotDays=data[0].dateofvisit;
      console.log(data[0].dateofvisit[0].slottime[0]);
      // localStorage.setItem("Monday",data[0].dateofvisit.Monday);
      // localStorage.setItem("Thursday",data[0].dateofvisit.Thursday);
      // localStorage.setItem("Tuesday",data[0].dateofvisit.Tuesday);
      // localStorage.setItem("Friday",data[0].dateofvisit.Friday);
      // localStorage.setItem("Saturday",data[0].dateofvisit.Saturday);


      // localStorage.setItem("Mrng",data[1].Timeslot.Mrng);
      // localStorage.setItem("Noon",data[1].Timeslot.Noon);

      // localStorage.setItem("Salem",data[2].City.Salem);
      // localStorage.setItem("Chennai",data[2].City.Chennai);
      // localStorage.setItem("Madurai",data[2].City.Madurai);
      // localStorage.setItem("Kovai",data[2].City.Kovai);
      // localStorage.setItem("Dindugal",data[2].City.Dindugal);

      // localStorage.setItem('address1',data[3].Address.address1);
      // localStorage.setItem('address2',data[3].Address.address2);
      // localStorage.setItem('address3',data[3].Address.address3);
      // localStorage.setItem('address4',data[3].Address.address4);
      // localStorage.setItem('address5',data[3].Address.address5);
      // localStorage.setItem('short1',data[4].Shortaddress.short1);
      // localStorage.setItem('short2',data[4].Shortaddress.short2);
      // localStorage.setItem('short3',data[4].Shortaddress.short3);
      // localStorage.setItem('short4',data[4].Shortaddress.short4);
      // localStorage.setItem('short5',data[4].Shortaddress.short5);

      // this.Monday=localStorage.getItem('Monday');
      // this.Tuesday=localStorage.getItem('Tuesday');
      // this.Friday=localStorage.getItem('Friday');
      // this.Thursday=localStorage.getItem('Thursday');
      // this.Saturday=localStorage.getItem('Saturday');

      // this.Mrng=localStorage.getItem('Mrng');
      // this.Noon=localStorage.getItem('Noon');
      // this.Eve=localStorage.getItem('Eve');

      // this.Salem=localStorage.getItem('Salem');
      // this.Kovai=localStorage.getItem('Kovai');
      // this.Dindugal=localStorage.getItem('Dindugal');
      // this.Madurai=localStorage.getItem('Madurai');
      // this.Chennai=localStorage.getItem('Chennai');

    });
  }

  slotTime(slottime:any){

  }

  slotdate(index:any){
    this.slottimeperday=this.slotDays[index].slottime;
  }
  onselect(value:any){
    if(value=='Salem'){
      this.inval=localStorage.getItem('short1');
      this.Salemadd=localStorage.getItem('address1');
      this.show=true;
    }
    else if(value=='Chennai'){
      this.inval=localStorage.getItem('short2');
      this.Salemadd=localStorage.getItem('address2');
      this.show=true;
    }
    else if(value=='Dindugal'){
      this.inval=localStorage.getItem('short4');
      this.Salemadd=localStorage.getItem('address4');
      this.show=true;
    }
    else if(value=='Madurai'){
      this.inval=localStorage.getItem('short3');
      this.Salemadd=localStorage.getItem('address3');
      this.show=true;
    }
    else if(value=='Kovai'){
      this.inval=localStorage.getItem('short5');
      this.Salemadd=localStorage.getItem('address5');
      this.show=true;
    }
    else{
      alert("not found");
    }
  }
  // add(EVadd:any){
  //   console.log(EVadd);
  //   // if(EVadd=='Salem'){

  //   // }
  // }
  Bookappointment=this.form.group({
    regemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone:['',[Validators.required,Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
    username:['',[Validators.required,Validators.pattern("^[A-Za-z][A-Za-z0-9_]{7,29}$")]],
    dateofvisit:['',Validators.required],
    Timeslot:['',Validators.required],
    location:['',Validators.required]
  })
  Booking(bookaddress:any){
    const email=this.Bookappointment.controls['regemail'].value;
    const username=this.Bookappointment.controls['username'].value;
    const date=this.Bookappointment.controls['dateofvisit'].value;
    const time=this.Bookappointment.controls['Timeslot'].value;
    const phone=this.Bookappointment.controls['phone'].value;
    console.log(bookaddress);

    this.service.storebooking(this.Bookappointment.value,email,phone,username,date,time,bookaddress);
  }
  image="../../assets/EV mart/INR.svg"
}
