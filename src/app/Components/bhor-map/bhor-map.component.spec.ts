import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhorMapComponent } from './bhor-map.component';

describe('BhorMapComponent', () => {
  let component: BhorMapComponent;
  let fixture: ComponentFixture<BhorMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhorMapComponent]
    });
    fixture = TestBed.createComponent(BhorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
