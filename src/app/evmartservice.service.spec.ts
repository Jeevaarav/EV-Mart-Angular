import { TestBed } from '@angular/core/testing';

import { EvmartserviceService } from './evmartservice.service';

describe('EvmartserviceService', () => {
  let service: EvmartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvmartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
