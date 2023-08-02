import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { CarddetailsService } from './carddetails.service';

describe('CarddetailsService', () => {
  let service: CarddetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
    });
    service = TestBed.inject(CarddetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
