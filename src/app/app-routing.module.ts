import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { VehiclemanagementComponent } from './vehiclemanagement/vehiclemanagement.component';
import { OffersComponent } from './offers/offers.component';
import { ExchangeComponent } from './exchange/exchange.component';

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
   path:"offers",
   component:OffersComponent
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
