import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductpageComponent } from './productpage/productpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { VehiclemanagementComponent } from './vehiclemanagement/vehiclemanagement.component';
import { OffersComponent } from './offers/offers.component';
import { ExchangeComponent } from './exchange/exchange.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ForgotnewComponent } from './forgotnew/forgotnew.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { EmailverificationComponent } from './emailverification/emailverification.component';
import { BookingconfirmComponent } from './bookingconfirm/bookingconfirm.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
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
import { EVhelpComponent } from './evhelp/evhelp.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { FillbookingGuard } from './fillbooking.guard';
import { OrderconfirmpageComponent } from './orderconfirmpage/orderconfirmpage.component';
import { ProfileserviceComponent } from './profileservice/profileservice.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { DebitcardpaymentComponent } from './debitcardpayment/debitcardpayment.component';
import { WalletdetailsComponent } from './walletdetails/walletdetails.component';
import { EvmartcenterpaymentComponent } from './evmartcenterpayment/evmartcenterpayment.component';
import { ProfilepaymentdetailsComponent } from './profilepaymentdetails/profilepaymentdetails.component';
import { ExchangebookingComponent } from './exchangebooking/exchangebooking.component';
import { UserpastordersComponent } from './userpastorders/userpastorders.component';
import { ProfiledeliveredordersComponent } from './profiledeliveredorders/profiledeliveredorders.component';
import { UsernewordersComponent } from './userneworders/userneworders.component';
import { UserseevicesComponent } from './userseevices/userseevices.component';
import { UserserviceacceptedComponent } from './userserviceaccepted/userserviceaccepted.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ProductpageComponent,
    FooterComponent,
    AdminComponent,
    VehiclemanagementComponent,
    OffersComponent,
    ExchangeComponent,
    LoginpageComponent,
    RegisterpageComponent,
    ForgotpassComponent,
    ForgotnewComponent,
    BookappointmentComponent,
    EmailverificationComponent,
    BookingconfirmComponent,
    OrderpageComponent,
    ServicepageComponent,
    ServicesformComponent,
    ServiceadminComponent,
    AdminformComponent,
    ProfilePageComponent,
    OrderdetailsComponent,
    AboutusComponent,
    InformationComponent,
    BenefitsOfEVComponent,
    BustingMythsComponent,
    EVIncentivesComponent,
    TypesofEVComponent,
    EVhelpComponent,
    ReviewOrderComponent,
    ManageAddressComponent,
    OrderconfirmpageComponent,
    ProfileserviceComponent,
    PaymentpageComponent,
    DebitcardpaymentComponent,
    WalletdetailsComponent,
    EvmartcenterpaymentComponent,
    ProfilepaymentdetailsComponent,
    ExchangebookingComponent,
    UserpastordersComponent,
    ProfiledeliveredordersComponent,
    UsernewordersComponent,
    UserseevicesComponent,
    UserserviceacceptedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule,
  ],
  providers: [FillbookingGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
