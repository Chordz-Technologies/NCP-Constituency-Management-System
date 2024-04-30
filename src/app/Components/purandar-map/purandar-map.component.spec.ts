import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurandarMapComponent } from './purandar-map.component';

describe('PurandarMapComponent', () => {
  let component: PurandarMapComponent;
  let fixture: ComponentFixture<PurandarMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurandarMapComponent]
    });
    fixture = TestBed.createComponent(PurandarMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
