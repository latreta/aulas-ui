import { TestBed } from '@angular/core/testing';

import { CadeiraService } from './cadeira.service';

describe('CadeiraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadeiraService = TestBed.get(CadeiraService);
    expect(service).toBeTruthy();
  });
});
