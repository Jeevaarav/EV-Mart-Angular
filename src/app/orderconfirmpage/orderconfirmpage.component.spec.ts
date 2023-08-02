import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { OrderconfirmpageComponent } from './orderconfirmpage.component';

describe('OrderconfirmpageComponent', () => {
  let component: OrderconfirmpageComponent;
  let fixture: ComponentFixture<OrderconfirmpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      declarations: [ OrderconfirmpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderconfirmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
