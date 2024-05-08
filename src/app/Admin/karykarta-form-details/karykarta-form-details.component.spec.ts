import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarykartaFormDetailsComponent } from './karykarta-form-details.component';

describe('KarykartaFormDetailsComponent', () => {
  let component: KarykartaFormDetailsComponent;
  let fixture: ComponentFixture<KarykartaFormDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarykartaFormDetailsComponent]
    });
    fixture = TestBed.createComponent(KarykartaFormDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
