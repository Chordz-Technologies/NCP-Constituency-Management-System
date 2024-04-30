import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKhadakwaslaDetailsComponent } from './edit-khadakwasla-details.component';

describe('EditKhadakwaslaDetailsComponent', () => {
  let component: EditKhadakwaslaDetailsComponent;
  let fixture: ComponentFixture<EditKhadakwaslaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditKhadakwaslaDetailsComponent]
    });
    fixture = TestBed.createComponent(EditKhadakwaslaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
