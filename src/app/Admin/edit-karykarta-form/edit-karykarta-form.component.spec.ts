import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKarykartaFormComponent } from './edit-karykarta-form.component';

describe('EditKarykartaFormComponent', () => {
  let component: EditKarykartaFormComponent;
  let fixture: ComponentFixture<EditKarykartaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditKarykartaFormComponent]
    });
    fixture = TestBed.createComponent(EditKarykartaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
