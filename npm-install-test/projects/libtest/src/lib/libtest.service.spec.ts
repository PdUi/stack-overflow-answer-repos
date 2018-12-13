import { TestBed } from '@angular/core/testing';

import { LibtestService } from './libtest.service';

describe('LibtestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibtestService = TestBed.get(LibtestService);
    expect(service).toBeTruthy();
  });
});
