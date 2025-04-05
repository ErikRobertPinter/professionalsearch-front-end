import { TestBed } from '@angular/core/testing';

import { ProfessionalParamsServiceService } from './professional-params-service.service';

describe('ProfessionalParamsServiceService', () => {
  let service: ProfessionalParamsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalParamsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
