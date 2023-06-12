import { TestBed } from '@angular/core/testing';

import { HupaLibraryService } from './hupa-library.service';

describe('HupaLibraryService', () => {
  let service: HupaLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HupaLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
