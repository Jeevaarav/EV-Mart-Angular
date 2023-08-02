import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ServicesformComponent } from './servicesform.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ServicesformComponent', () => {
  let component: ServicesformComponent;
  let fixture: ComponentFixture<ServicesformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ ServicesformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
