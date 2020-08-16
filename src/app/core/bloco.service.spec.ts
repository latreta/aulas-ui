import { TestBed } from '@angular/core/testing';

import { BlocoService } from './bloco.service';

describe('BlocoServiceService', () => {
  let service: BlocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
