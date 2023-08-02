import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { OrderintervalService } from './orderinterval.service';

describe('OrderintervalService', () => {
  let service: OrderintervalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
    });
    service = TestBed.inject(OrderintervalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
