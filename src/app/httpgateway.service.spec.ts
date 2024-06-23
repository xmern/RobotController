import { TestBed } from '@angular/core/testing';

import { HttpgatewayService } from './httpgateway.service';

describe('HttpgatewayService', () => {
  let service: HttpgatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpgatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
