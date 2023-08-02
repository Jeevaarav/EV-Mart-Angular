import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { OrderbookingService } from './orderbooking.service';

describe('OrderbookingService', () => {
  let service: OrderbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
    });
    service = TestBed.inject(OrderbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
