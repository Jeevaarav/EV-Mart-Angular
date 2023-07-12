import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitcardpaymentComponent } from './debitcardpayment.component';

describe('DebitcardpaymentComponent', () => {
  let component: DebitcardpaymentComponent;
  let fixture: ComponentFixture<DebitcardpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
