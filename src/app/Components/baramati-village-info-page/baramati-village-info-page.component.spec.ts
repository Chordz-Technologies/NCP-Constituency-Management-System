import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaramatiVillageInfoPageComponent } from './baramati-village-info-page.component';

describe('BaramatiVillageInfoPageComponent', () => {
  let component: BaramatiVillageInfoPageComponent;
  let fixture: ComponentFixture<BaramatiVillageInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaramatiVillageInfoPageComponent]
    });
    fixture = TestBed.createComponent(BaramatiVillageInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
