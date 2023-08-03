import { TestBed } from '@angular/core/testing';

import { FillbookingGuard } from './fillbooking.guard';
import { RouterModule } from '@angular/router';
import { DebitcardpaymentComponent } from './debitcardpayment/debitcardpayment.component';

describe('FillbookingGuard', () => {
  let guard: FillbookingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
     providers:[FillbookingGuard]
    });
    guard = TestBed.inject(FillbookingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
