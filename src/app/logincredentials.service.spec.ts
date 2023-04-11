import { TestBed } from '@angular/core/testing';

import { LogincredentialsService } from './logincredentials.service';

describe('LogincredentialsService', () => {
  let service: LogincredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogincredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
