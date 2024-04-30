import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurandarDetailsComponent } from './purandar-details.component';

describe('PurandarDetailsComponent', () => {
  let component: PurandarDetailsComponent;
  let fixture: ComponentFixture<PurandarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurandarDetailsComponent]
    });
    fixture = TestBed.createComponent(PurandarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
