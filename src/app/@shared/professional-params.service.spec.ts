import { TestBed } from '@angular/core/testing';

import { ProfessionalParamsService } from './professional-params.service';

describe('ProfessionalParamsService', () => {
  let service: ProfessionalParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
