import { TestBed } from '@angular/core/testing';

import { ZaslatService } from './zaslat.service';

describe('ZaslatService', () => {
  let service: ZaslatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZaslatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
