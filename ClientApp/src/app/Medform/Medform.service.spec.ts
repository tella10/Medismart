/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedformService } from './Medform.service';

describe('Service: Medform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedformService]
    });
  });

  it('should ...', inject([MedformService], (service: MedformService) => {
    expect(service).toBeTruthy();
  }));
});
