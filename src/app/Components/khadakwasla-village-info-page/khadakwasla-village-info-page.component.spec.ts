import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadakwaslaVillageInfoPageComponent } from './khadakwasla-village-info-page.component';

describe('KhadakwaslaVillageInfoPageComponent', () => {
  let component: KhadakwaslaVillageInfoPageComponent;
  let fixture: ComponentFixture<KhadakwaslaVillageInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhadakwaslaVillageInfoPageComponent]
    });
    fixture = TestBed.createComponent(KhadakwaslaVillageInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
