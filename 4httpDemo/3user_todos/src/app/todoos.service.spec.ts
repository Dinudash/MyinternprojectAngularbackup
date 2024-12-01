import { TestBed } from '@angular/core/testing';

import { TodoosService } from './todoos.service';

describe('TodoosService', () => {
  let service: TodoosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
