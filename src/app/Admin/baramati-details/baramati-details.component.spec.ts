import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaramatiDetailsComponent } from './baramati-details.component';

describe('BaramatiDetailsComponent', () => {
  let component: BaramatiDetailsComponent;
  let fixture: ComponentFixture<BaramatiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaramatiDetailsComponent]
    });
    fixture = TestBed.createComponent(BaramatiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
