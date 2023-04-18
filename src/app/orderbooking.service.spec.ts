import { TestBed } from '@angular/core/testing';

import { OrderbookingService } from './orderbooking.service';

describe('OrderbookingService', () => {
  let service: OrderbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
