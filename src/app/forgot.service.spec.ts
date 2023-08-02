import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ForgotService } from './forgot.service';

describe('ForgotService', () => {
  let service: ForgotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
    });
    service = TestBed.inject(ForgotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
