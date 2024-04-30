import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaundDetailsComponent } from './daund-details.component';

describe('DaundDetailsComponent', () => {
  let component: DaundDetailsComponent;
  let fixture: ComponentFixture<DaundDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaundDetailsComponent]
    });
    fixture = TestBed.createComponent(DaundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
