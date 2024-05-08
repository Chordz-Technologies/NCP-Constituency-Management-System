import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarykartaFormComponent } from './karykarta-form.component';

describe('KarykartaFormComponent', () => {
  let component: KarykartaFormComponent;
  let fixture: ComponentFixture<KarykartaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarykartaFormComponent]
    });
    fixture = TestBed.createComponent(KarykartaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
