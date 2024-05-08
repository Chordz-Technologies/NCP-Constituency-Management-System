import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewKarykartaQuestionComponent } from './add-new-karykarta-question.component';

describe('AddNewKarykartaQuestionComponent', () => {
  let component: AddNewKarykartaQuestionComponent;
  let fixture: ComponentFixture<AddNewKarykartaQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewKarykartaQuestionComponent]
    });
    fixture = TestBed.createComponent(AddNewKarykartaQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
