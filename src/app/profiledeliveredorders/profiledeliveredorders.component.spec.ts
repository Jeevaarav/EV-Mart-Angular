import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ProfiledeliveredordersComponent } from './profiledeliveredorders.component';

describe('ProfiledeliveredordersComponent', () => {
  let component: ProfiledeliveredordersComponent;
  let fixture: ComponentFixture<ProfiledeliveredordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      declarations: [ ProfiledeliveredordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfiledeliveredordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
