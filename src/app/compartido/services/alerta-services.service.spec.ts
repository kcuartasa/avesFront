import { TestBed } from '@angular/core/testing';

import { AlertaServicesService } from './alerta-services.service';

describe('AlertaServicesService', () => {
  let service: AlertaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
