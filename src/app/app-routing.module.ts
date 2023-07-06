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
import { OrderpageComponent } from './orderpage/orderpage.component';
import { LoginGuard } from './login.guard';
import { ServicepageComponent } from './servicepage/servicepage.component';
import { ServicesformComponent } from './servicesform/servicesform.component';
import { ServiceadminComponent } from './serviceadmin/serviceadmin.component';
import { AdminformComponent } from './adminform/adminform.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InformationComponent } from './information/information.component';
import { BenefitsOfEVComponent } from './benefits-of-ev/benefits-of-ev.component';
import { BustingMythsComponent } from './busting-myths/busting-myths.component';
import { EVIncentivesComponent } from './ev-incentives/ev-incentives.component';
import { TypesofEVComponent } from './typesof-ev/typesof-ev.component';
import { ServiceGuardGuard } from './service-guard.guard';
import { EVhelpComponent } from './evhelp/evhelp.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { FillbookingGuard } from './fillbooking.guard';




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
    path:"Profile",
    component:ProfilePageComponent,
    children:[{
      path:"Address",
      component:ManageAddressComponent
    },
    {
      path:"",
      redirectTo:"Orders",
      pathMatch:'full'
    },
  {
    path:"Orders",
    component:OrderdetailsComponent
  }]
  },
  {
    path:"Service",
    component:ServicepageComponent
  },
  {
    path:"",
    children:[{
      path:"Service/serviceform",
      component:ServicesformComponent
    }]
  },
  {
    path:"serviceform",
    component:ServicesformComponent,
    canActivate:[ServiceGuardGuard]
  },
  {
    path:"Help",
    component:EVhelpComponent
  },
  {
    path:"orderpage",
    component:OrderpageComponent,
    canActivate:[LoginGuard]
  },
  {
    path:"",
    children:[
      {
        path:"orderpage/revieworder",
        component:ReviewOrderComponent,
        canDeactivate:[FillbookingGuard]
      }
    ]
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
    path:"Information",
    component:InformationComponent
  },
  {
    path:"",
    children:[
      {
        path:"Information/Benefits",
        component:BenefitsOfEVComponent
      },
      {
        path:"Information/myths",
        component:BustingMythsComponent
      },
      {
        path:"Information/EVIncentives",
        component:EVIncentivesComponent
      },
      {
        path:"Information/TypesofEV",
        component:TypesofEVComponent
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
    path:"About",
    component:AboutusComponent
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
    },
  {
    path:"admin/adminserv",
    component:ServiceadminComponent
  },
{
  path:"admin/adminserv/adminform",
  component:AdminformComponent
}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
