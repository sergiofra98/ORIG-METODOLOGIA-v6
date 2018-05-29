import { TestBed, inject } from '@angular/core/testing';

import { QueryPerfilesService } from './query-perfiles.service';

describe('QueryPerfilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryPerfilesService]
    });
  });

  it('should be created', inject([QueryPerfilesService], (service: QueryPerfilesService) => {
    expect(service).toBeTruthy();
  }));
});
