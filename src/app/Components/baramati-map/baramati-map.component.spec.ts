import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaramatiMapComponent } from './baramati-map.component';

describe('BaramatiMapComponent', () => {
  let component: BaramatiMapComponent;
  let fixture: ComponentFixture<BaramatiMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaramatiMapComponent]
    });
    fixture = TestBed.createComponent(BaramatiMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
