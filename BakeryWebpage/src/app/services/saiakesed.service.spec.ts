import { TestBed } from '@angular/core/testing';

import { SaiakesedService } from './saiakesed.service';

describe('SaiakesedService', () => {
  let service: SaiakesedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaiakesedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
