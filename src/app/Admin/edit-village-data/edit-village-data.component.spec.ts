import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVillageDataComponent } from './edit-village-data.component';

describe('EditVillageDataComponent', () => {
  let component: EditVillageDataComponent;
  let fixture: ComponentFixture<EditVillageDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVillageDataComponent]
    });
    fixture = TestBed.createComponent(EditVillageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
