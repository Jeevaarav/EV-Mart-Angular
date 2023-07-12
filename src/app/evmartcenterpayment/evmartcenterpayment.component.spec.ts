import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvmartcenterpaymentComponent } from './evmartcenterpayment.component';

describe('EvmartcenterpaymentComponent', () => {
  let component: EvmartcenterpaymentComponent;
  let fixture: ComponentFixture<EvmartcenterpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvmartcenterpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvmartcenterpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
