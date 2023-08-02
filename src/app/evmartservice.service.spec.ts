import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { EvmartserviceService } from './evmartservice.service';

describe('EvmartserviceService', () => {
  let service: EvmartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
    });
    service = TestBed.inject(EvmartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
