import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ProfilePageComponent } from './profile-page.component';
import { RouterModule } from '@angular/router';
import { ManageAddressComponent } from '../manage-address/manage-address.component';
import { ProfileserviceComponent } from '../profileservice/profileservice.component';
import { OrderdetailsComponent } from '../orderdetails/orderdetails.component';
import { ProfilepaymentdetailsComponent } from '../profilepaymentdetails/profilepaymentdetails.component';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,RouterModule.forRoot([
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
      }
      ])],
      declarations: [ ProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
