import { TestBed } from '@angular/core/testing';

import { UserDService } from './user-d.service';

describe('UserDService', () => {
  let service: UserDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
