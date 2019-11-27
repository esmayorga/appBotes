import { TestBed } from '@angular/core/testing';

import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperacionesService = TestBed.get(OperacionesService);
    expect(service).toBeTruthy();
  });
});
