import { TestBed } from '@angular/core/testing';

import { TordidService } from './tordid.service';

describe('TordidService', () => {
  let service: TordidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TordidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
