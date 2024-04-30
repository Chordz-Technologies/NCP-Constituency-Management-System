import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDaundDetailsComponent } from './edit-daund-details.component';

describe('EditDaundDetailsComponent', () => {
  let component: EditDaundDetailsComponent;
  let fixture: ComponentFixture<EditDaundDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDaundDetailsComponent]
    });
    fixture = TestBed.createComponent(EditDaundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
