import { TestBed } from '@angular/core/testing';

import { DataApiCarService } from './data-api-car.service';

describe('DataApiCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataApiCarService = TestBed.get(DataApiCarService);
    expect(service).toBeTruthy();
  });
});
