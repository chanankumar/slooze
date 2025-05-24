import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBarChartsComponent } from './overview-bar-charts.component';

describe('OverviewBarChartsComponent', () => {
  let component: OverviewBarChartsComponent;
  let fixture: ComponentFixture<OverviewBarChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewBarChartsComponent]
    });
    fixture = TestBed.createComponent(OverviewBarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
