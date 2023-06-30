import { TestBed } from '@angular/core/testing';

import { AngularElementLibService } from './angular-element-lib.service';

describe('AngularElementLibService', () => {
  let service: AngularElementLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularElementLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
