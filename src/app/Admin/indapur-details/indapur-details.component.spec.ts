import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndapurDetailsComponent } from './indapur-details.component';

describe('IndapurDetailsComponent', () => {
  let component: IndapurDetailsComponent;
  let fixture: ComponentFixture<IndapurDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndapurDetailsComponent]
    });
    fixture = TestBed.createComponent(IndapurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
