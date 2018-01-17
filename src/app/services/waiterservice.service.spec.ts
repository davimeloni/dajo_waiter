import { TestBed, inject } from '@angular/core/testing';

import { WaiterserviceService } from './waiterservice.service';

describe('WaiterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaiterserviceService]
    });
  });

  it('should be created', inject([WaiterserviceService], (service: WaiterserviceService) => {
    expect(service).toBeTruthy();
  }));
});
