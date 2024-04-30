import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurandarDetailsComponent } from './edit-purandar-details.component';

describe('EditPurandarDetailsComponent', () => {
  let component: EditPurandarDetailsComponent;
  let fixture: ComponentFixture<EditPurandarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPurandarDetailsComponent]
    });
    fixture = TestBed.createComponent(EditPurandarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
