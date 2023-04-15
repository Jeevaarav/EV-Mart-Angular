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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
