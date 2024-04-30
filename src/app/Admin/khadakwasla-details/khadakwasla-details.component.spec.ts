import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadakwaslaDetailsComponent } from './khadakwasla-details.component';

describe('KhadakwaslaDetailsComponent', () => {
  let component: KhadakwaslaDetailsComponent;
  let fixture: ComponentFixture<KhadakwaslaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhadakwaslaDetailsComponent]
    });
    fixture = TestBed.createComponent(KhadakwaslaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
