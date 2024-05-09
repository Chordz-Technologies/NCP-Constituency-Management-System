import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintMessagesComponent } from './add-complaint-messages.component';

describe('AddComplaintMessagesComponent', () => {
  let component: AddComplaintMessagesComponent;
  let fixture: ComponentFixture<AddComplaintMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComplaintMessagesComponent]
    });
    fixture = TestBed.createComponent(AddComplaintMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
