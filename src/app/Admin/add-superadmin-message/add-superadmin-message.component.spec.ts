import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperadminMessageComponent } from './add-superadmin-message.component';

describe('AddSuperadminMessageComponent', () => {
  let component: AddSuperadminMessageComponent;
  let fixture: ComponentFixture<AddSuperadminMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSuperadminMessageComponent]
    });
    fixture = TestBed.createComponent(AddSuperadminMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
