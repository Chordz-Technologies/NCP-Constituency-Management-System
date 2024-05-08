import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBaramatiDetailsComponent } from './edit-baramati-details.component';

describe('EditBaramatiDetailsComponent', () => {
  let component: EditBaramatiDetailsComponent;
  let fixture: ComponentFixture<EditBaramatiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBaramatiDetailsComponent]
    });
    fixture = TestBed.createComponent(EditBaramatiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
