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
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { DebitcardpaymentComponent } from './debitcardpayment/debitcardpayment.component';
import { EvmartcenterpaymentComponent } from './evmartcenterpayment/evmartcenterpayment.component';
import { WalletdetailsComponent } from './walletdetails/walletdetails.component';
import { ProfilepaymentdetailsComponent } from './profilepaymentdetails/profilepaymentdetails.component';
import { OrderconfirmpageComponent } from './orderconfirmpage/orderconfirmpage.component';
import { ExchangebookingComponent } from './exchangebooking/exchangebooking.component';
import { UserpastordersComponent } from './userpastorders/userpastorders.component';
import { ProfiledeliveredordersComponent } from './profiledeliveredorders/profiledeliveredorders.component';
import { UsernewordersComponent } from './userneworders/userneworders.component';
import { ProfileserviceComponent } from './profileservice/profileservice.component';
import { UserseevicesComponent } from './userseevices/userseevices.component';
import { UserorderfeedbackComponent } from './userorderfeedback/userorderfeedback.component';
import { AdminoffermanagementComponent } from './adminoffermanagement/adminoffermanagement.component';
import { HelpanswersComponent } from './helpanswers/helpanswers.component';
import { VarientmanagementComponent } from './varientmanagement/varientmanagement.component';
import { Error404Component } from './error404/error404.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AdminstatisticsComponent } from './adminstatistics/adminstatistics.component';
import { AdminreviewComponent } from './adminreview/adminreview.component';




const routes: Routes = [
  {
    path:"",
    component:IndexComponent,
    title:"EV Mart"
  },
  {
    path:"Product",
    component:ProductpageComponent
  },
  {
    path:"Profile",
    component:ProfilePageComponent,
    children:[
      {
        path:"",
        redirectTo:"Orders",
        pathMatch:'full'
      },
      {
      path:"Address",
      component:ManageAddressComponent
    },
    {
      path:"userProfileService",
      component:ProfileserviceComponent
    },
  {
    path:"Orders",
    component:OrderdetailsComponent
  },
  {
    path:"profilePayment",
    component:ProfilepaymentdetailsComponent
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
    component:EVhelpComponent,
  },
  {
    path:"Helpanswers",
    component:HelpanswersComponent
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
        component:ReviewOrderComponent
      }
    ]
  },
  {
    path:"",
    component:LoginpageComponent,
    children:[
      {
        path:"",
        redirectTo:'login',
        pathMatch:'full'
      },
      {
        path:"login",
        component:LoginpageComponent
      },
      {
      path:"register",
      component:RegisterpageComponent
    },
    {
      path:"forgot1",
      component:ForgotpassComponent
    },
    {
      path:"forgotnew",
      component:ForgotnewComponent
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
    path:"oldvehicle",
    component:ExchangebookingComponent
  },
  {
    path:"exchange",
    component:ExchangeComponent
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
    path:"payment",
    component:PaymentpageComponent
  },
  {
    path:"debitcard",
    component:DebitcardpaymentComponent,
    canDeactivate:[FillbookingGuard]
  },
  {
    path:"evmartcenterpayment",
    component:EvmartcenterpaymentComponent
  },
  {
    path:"walletpayment",
    component:WalletdetailsComponent
  },
  {
    path:"orderconfirmpage",
    component:OrderconfirmpageComponent
  },
  {
    path:"userorderfeedback",
    component:UserorderfeedbackComponent
  },
  {
    path:"userPastorderDetails",
    component:UserpastordersComponent,
    title:"PastOrders"
  },
  {
    path:"userDeliveryDetails",
    component:ProfiledeliveredordersComponent
  },
  {
    path:"userNewOrders",
    component:UsernewordersComponent
  },
  {
    path:"userService",
    component:UserseevicesComponent
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
},
{
  path:"admin/offersmanagement",
  component:AdminoffermanagementComponent
},
{
  path:"adminvarientmanagement",
  component:VarientmanagementComponent
}
]

  },
  {
    path:"terms",
    component:TermsConditionsComponent
  },
  {
    path:"adminstatistics",
    component:AdminstatisticsComponent
  },
  {
    path:"adminreview",
    component:AdminreviewComponent
  },
{
  path:"**",
  component:Error404Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
