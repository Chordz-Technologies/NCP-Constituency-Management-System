import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSurveyFormComponent } from './edit-survey-form.component';

describe('EditSurveyFormComponent', () => {
  let component: EditSurveyFormComponent;
  let fixture: ComponentFixture<EditSurveyFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSurveyFormComponent]
    });
    fixture = TestBed.createComponent(EditSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
