import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { UserpastordersComponent } from './userpastorders.component';

describe('UserpastordersComponent', () => {
  let component: UserpastordersComponent;
  let fixture: ComponentFixture<UserpastordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      declarations: [ UserpastordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserpastordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
