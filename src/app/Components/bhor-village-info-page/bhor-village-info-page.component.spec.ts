import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhorVillageInfoPageComponent } from './bhor-village-info-page.component';

describe('BhorVillageInfoPageComponent', () => {
  let component: BhorVillageInfoPageComponent;
  let fixture: ComponentFixture<BhorVillageInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BhorVillageInfoPageComponent]
    });
    fixture = TestBed.createComponent(BhorVillageInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
