import { TestBed } from '@angular/core/testing';

import { DataApiGraphicService } from './data-api-graphic.service';

describe('DataApiGraphicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataApiGraphicService = TestBed.get(DataApiGraphicService);
    expect(service).toBeTruthy();
  });
});
