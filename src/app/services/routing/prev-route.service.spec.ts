import { TestBed } from '@angular/core/testing';

import { PrevRouteService } from './prev-route.service';

describe('PrevRouteService', () => {
  let service: PrevRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
