import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { VehiclemanagementComponent } from './vehiclemanagement/vehiclemanagement.component';
import { OffersComponent } from './offers/offers.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ForgotnewComponent } from './forgotnew/forgotnew.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { EmailverificationComponent } from './emailverification/emailverification.component';
import { BookingconfirmComponent } from './bookingconfirm/bookingconfirm.component';




const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"Product",
    component:ProductpageComponent
  },
  {
    path:"login",
    component:LoginpageComponent
  },
  {
    path:"",
    children:[{
      path:"login/register",
      component:RegisterpageComponent
    },
    {
      path:"login/forgot1",
      component:ForgotpassComponent
    },
    {
      path:"login/forgot1/forgotnew",
      component:ForgotnewComponent
    },
  {
    path:"",
    component:LoginpageComponent
  }
]
  },
  {
    path:"register",
    component:RegisterpageComponent
  },
  {
   path:"offers",
   component:OffersComponent
  },
  {
    path:"emailverify",
    component:EmailverificationComponent
  },
  {
    path:"bookappointment",
    component:BookappointmentComponent
  },
  {
    path:"bookconfirm",
    component:BookingconfirmComponent
  },
  {
    path:"",
    children:[{
      path:"offers/exchange",
      component:ExchangeComponent
    }]
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"",
    children:[{
      path:"admin/vehiclemanagement",
      component:VehiclemanagementComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
