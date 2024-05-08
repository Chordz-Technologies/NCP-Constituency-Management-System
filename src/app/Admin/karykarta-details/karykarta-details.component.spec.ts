import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarykartaDetailsComponent } from './karykarta-details.component';

describe('KarykartaDetailsComponent', () => {
  let component: KarykartaDetailsComponent;
  let fixture: ComponentFixture<KarykartaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarykartaDetailsComponent]
    });
    fixture = TestBed.createComponent(KarykartaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
