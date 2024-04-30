import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhorDetailsComponent } from './bhor-details.component';

describe('BhorDetailsComponent', () => {
  let component: BhorDetailsComponent;
  let fixture: ComponentFixture<BhorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhorDetailsComponent]
    });
    fixture = TestBed.createComponent(BhorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
