import { TestBed } from '@angular/core/testing';

import { LoadingScreenServiceService } from './loading-screen-service.service';

describe('LoadingScreenServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingScreenServiceService = TestBed.get(LoadingScreenServiceService);
    expect(service).toBeTruthy();
  });
});
