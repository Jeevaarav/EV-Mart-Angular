import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ProfilepaymentdetailsComponent } from './profilepaymentdetails.component';

describe('ProfilepaymentdetailsComponent', () => {
  let component: ProfilepaymentdetailsComponent;
  let fixture: ComponentFixture<ProfilepaymentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      declarations: [ ProfilepaymentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilepaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
