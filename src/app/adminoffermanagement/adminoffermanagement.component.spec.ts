import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoffermanagementComponent } from './adminoffermanagement.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms';

describe('AdminoffermanagementComponent', () => {
  let component: AdminoffermanagementComponent;
  let fixture: ComponentFixture<AdminoffermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ AdminoffermanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminoffermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
