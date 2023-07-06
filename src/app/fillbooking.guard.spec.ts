import { TestBed } from '@angular/core/testing';

import { FillbookingGuard } from './fillbooking.guard';

describe('FillbookingGuard', () => {
  let guard: FillbookingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FillbookingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
