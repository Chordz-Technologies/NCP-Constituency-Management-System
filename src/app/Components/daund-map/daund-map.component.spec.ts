import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaundMapComponent } from './daund-map.component';

describe('DaundMapComponent', () => {
  let component: DaundMapComponent;
  let fixture: ComponentFixture<DaundMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaundMapComponent]
    });
    fixture = TestBed.createComponent(DaundMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
