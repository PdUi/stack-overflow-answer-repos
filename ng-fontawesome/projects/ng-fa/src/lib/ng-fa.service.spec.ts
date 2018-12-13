import { TestBed } from '@angular/core/testing';

import { NgFaService } from './ng-fa.service';

describe('NgFaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFaService = TestBed.get(NgFaService);
    expect(service).toBeTruthy();
  });
});
