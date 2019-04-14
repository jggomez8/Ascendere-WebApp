import { TestBed } from '@angular/core/testing';

import { ProyectosInnovacionService } from './proyectos-innovacion.service';

describe('ProyectosInnovacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectosInnovacionService = TestBed.get(ProyectosInnovacionService);
    expect(service).toBeTruthy();
  });
});
