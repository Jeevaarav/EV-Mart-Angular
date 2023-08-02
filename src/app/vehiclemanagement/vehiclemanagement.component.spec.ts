import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { VehiclemanagementComponent } from './vehiclemanagement.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('VehiclemanagementComponent', () => {
  let component: VehiclemanagementComponent;
  let fixture: ComponentFixture<VehiclemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ VehiclemanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
