import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaundVillageInfoPageComponent } from './daund-village-info-page.component';

describe('DaundVillageInfoPageComponent', () => {
  let component: DaundVillageInfoPageComponent;
  let fixture: ComponentFixture<DaundVillageInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaundVillageInfoPageComponent]
    });
    fixture = TestBed.createComponent(DaundVillageInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
