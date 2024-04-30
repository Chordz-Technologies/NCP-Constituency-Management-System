import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndapurMapComponent } from './indapur-map.component';

describe('IndapurMapComponent', () => {
  let component: IndapurMapComponent;
  let fixture: ComponentFixture<IndapurMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndapurMapComponent]
    });
    fixture = TestBed.createComponent(IndapurMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
