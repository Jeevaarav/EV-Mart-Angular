import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { UserseevicesComponent } from './userseevices.component';

describe('UserseevicesComponent', () => {
  let component: UserseevicesComponent;
  let fixture: ComponentFixture<UserseevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      declarations: [ UserseevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserseevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
