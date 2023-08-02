import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { DebitcardpaymentComponent } from './debitcardpayment.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DebitcardpaymentComponent', () => {
  let component: DebitcardpaymentComponent;
  let fixture: ComponentFixture<DebitcardpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ DebitcardpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitcardpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
