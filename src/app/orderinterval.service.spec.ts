import { TestBed } from '@angular/core/testing';

import { OrderintervalService } from './orderinterval.service';

describe('OrderintervalService', () => {
  let service: OrderintervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderintervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
