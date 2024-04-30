import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadakwaslaMapComponent } from './khadakwasla-map.component';

describe('KhadakwaslaMapComponent', () => {
  let component: KhadakwaslaMapComponent;
  let fixture: ComponentFixture<KhadakwaslaMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhadakwaslaMapComponent]
    });
    fixture = TestBed.createComponent(KhadakwaslaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
