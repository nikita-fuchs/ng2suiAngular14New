import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SemanticUiComponent } from './ng2-semantic-ui.component';

describe('Ng2SemanticUiComponent', () => {
  let component: Ng2SemanticUiComponent;
  let fixture: ComponentFixture<Ng2SemanticUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ng2SemanticUiComponent]
    });
    fixture = TestBed.createComponent(Ng2SemanticUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
