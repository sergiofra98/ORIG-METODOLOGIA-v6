import { TestBed, inject } from '@angular/core/testing';

import { ConsultaInicialService } from './consulta-inicial.service';

describe('ConsultaInicialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaInicialService]
    });
  });

  it('should be created', inject([ConsultaInicialService], (service: ConsultaInicialService) => {
    expect(service).toBeTruthy();
  }));
});
