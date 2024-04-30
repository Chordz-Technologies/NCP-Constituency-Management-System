import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBhorDetailsComponent } from './edit-bhor-details.component';

describe('EditBhorDetailsComponent', () => {
  let component: EditBhorDetailsComponent;
  let fixture: ComponentFixture<EditBhorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBhorDetailsComponent]
    });
    fixture = TestBed.createComponent(EditBhorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
