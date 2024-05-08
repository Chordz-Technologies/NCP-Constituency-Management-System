import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurandarVillageInfoPageComponent } from './purandar-village-info-page.component';

describe('PurandarVillageInfoPageComponent', () => {
  let component: PurandarVillageInfoPageComponent;
  let fixture: ComponentFixture<PurandarVillageInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurandarVillageInfoPageComponent]
    });
    fixture = TestBed.createComponent(PurandarVillageInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
