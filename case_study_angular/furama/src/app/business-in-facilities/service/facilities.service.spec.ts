import { TestBed } from '@angular/core/testing';

import { FacilitiesService } from './facilities.service';

describe('FacilitiesServiceService', () => {
  let service: FacilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
