import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { LogincredentialsService } from './logincredentials.service';

describe('LogincredentialsService', () => {
  let service: LogincredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
    });
    service = TestBed.inject(LogincredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
