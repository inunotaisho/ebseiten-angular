import { TestBed } from '@angular/core/testing';

import { EmailoutcomeService } from './emailoutcome.service';

describe('EmailoutcomeService', () => {
  let service: EmailoutcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailoutcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
