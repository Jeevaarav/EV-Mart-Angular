import { TestBed } from '@angular/core/testing';

import { EvmartcenterService } from './evmartcenter.service';

describe('EvmartcenterService', () => {
  let service: EvmartcenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvmartcenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
