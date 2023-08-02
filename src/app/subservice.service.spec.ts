import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { SubserviceService } from './subservice.service';

describe('SubserviceService', () => {
  let service: SubserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
    });
    service = TestBed.inject(SubserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
