import { TestBed } from '@angular/core/testing';

import { KringlidService } from './kringlid.service';

describe('KringlidService', () => {
  let service: KringlidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KringlidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
