import { TestBed } from '@angular/core/testing';

import { ArithServiceService } from './arith-service.service';

describe('ArithServiceService', () => {
  let service: ArithServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
