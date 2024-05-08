import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSurveyQuestionComponent } from './add-new-survey-question.component';

describe('AddNewSurveyQuestionComponent', () => {
  let component: AddNewSurveyQuestionComponent;
  let fixture: ComponentFixture<AddNewSurveyQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewSurveyQuestionComponent]
    });
    fixture = TestBed.createComponent(AddNewSurveyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
