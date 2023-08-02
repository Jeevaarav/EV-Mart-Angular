import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ProfileserviceComponent } from './profileservice.component';

describe('ProfileserviceComponent', () => {
  let component: ProfileserviceComponent;
  let fixture: ComponentFixture<ProfileserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      declarations: [ ProfileserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
