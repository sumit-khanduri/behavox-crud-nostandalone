import { TestBed } from '@angular/core/testing';

import { AssociateService} from './associate-service.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AssociateServiceService', () => {
  let service: AssociateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AssociateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
