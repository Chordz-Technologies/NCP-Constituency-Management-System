import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndapurVillageInfoPageComponent } from './indapur-village-info-page.component';

describe('IndapurVillageInfoPageComponent', () => {
  let component: IndapurVillageInfoPageComponent;
  let fixture: ComponentFixture<IndapurVillageInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndapurVillageInfoPageComponent]
    });
    fixture = TestBed.createComponent(IndapurVillageInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
