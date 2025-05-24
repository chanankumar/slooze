import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OverviewTilesComponent } from '../overview-tiles/overview-tiles.component';
import { NumberFormatPipe } from 'src/app/pipes/number-format.pipe';
import { OverviewBarChartsComponent } from '../overview-bar-charts/overview-bar-charts.component';
import { NgChartsModule } from 'ng2-charts';
import { SalesListComponent } from '../sales-list/sales-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewTilesComponent,
    NumberFormatPipe,
    OverviewBarChartsComponent,
    SalesListComponent,
  ],
  imports: [
    HomeRoutingModule,
    NgChartsModule,
    CommonModule
  ]
})
export class HomeModule {}
