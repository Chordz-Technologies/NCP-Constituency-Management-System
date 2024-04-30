import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIndapurDetailsComponent } from './edit-indapur-details.component';

describe('EditIndapurDetailsComponent', () => {
  let component: EditIndapurDetailsComponent;
  let fixture: ComponentFixture<EditIndapurDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIndapurDetailsComponent]
    });
    fixture = TestBed.createComponent(EditIndapurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
