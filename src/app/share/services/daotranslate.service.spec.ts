import { TestBed } from '@angular/core/testing';

import { DAOTranslateService } from './daotranslate.service';

describe('DAOTranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DAOTranslateService = TestBed.get(DAOTranslateService);
    expect(service).toBeTruthy();
  });
});
