import { TestBed } from '@angular/core/testing';

import { Ng2SemanticUiService } from './ng2-semantic-ui.service';

describe('Ng2SemanticUiService', () => {
  let service: Ng2SemanticUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2SemanticUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
