import { TestBed } from '@angular/core/testing';

import { ProgramaFormacionService } from './programa-formacion.service';

describe('ProgramaFormacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramaFormacionService = TestBed.get(ProgramaFormacionService);
    expect(service).toBeTruthy();
  });
});
