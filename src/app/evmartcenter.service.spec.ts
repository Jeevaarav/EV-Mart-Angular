import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { EvmartcenterService } from './evmartcenter.service';

describe('EvmartcenterService', () => {
  let service: EvmartcenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
    });
    service = TestBed.inject(EvmartcenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
