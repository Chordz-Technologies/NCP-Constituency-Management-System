import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormDetailsComponent } from './survey-form-details.component';

describe('SurveyFormDetailsComponent', () => {
  let component: SurveyFormDetailsComponent;
  let fixture: ComponentFixture<SurveyFormDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyFormDetailsComponent]
    });
    fixture = TestBed.createComponent(SurveyFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
