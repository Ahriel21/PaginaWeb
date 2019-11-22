import { TestBed } from '@angular/core/testing';

import { DataApiHouseService } from './data-api-house.service';

describe('DataApiHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataApiHouseService = TestBed.get(DataApiHouseService);
    expect(service).toBeTruthy();
  });
});
