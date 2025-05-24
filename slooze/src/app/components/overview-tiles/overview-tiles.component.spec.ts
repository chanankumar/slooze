import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTilesComponent } from './overview-tiles.component';

describe('OverviewTilesComponent', () => {
  let component: OverviewTilesComponent;
  let fixture: ComponentFixture<OverviewTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewTilesComponent]
    });
    fixture = TestBed.createComponent(OverviewTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
