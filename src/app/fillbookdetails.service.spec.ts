import { TestBed } from '@angular/core/testing';

import { FillbookdetailsService } from './fillbookdetails.service';

describe('FillbookdetailsService', () => {
  let service: FillbookdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillbookdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
