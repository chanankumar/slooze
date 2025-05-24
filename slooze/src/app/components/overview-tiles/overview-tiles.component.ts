import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-tiles',
  templateUrl: './overview-tiles.component.html',
  styleUrls: ['./overview-tiles.component.css']
})
export class OverviewTilesComponent {

  @Input() title: string = 'Total Earning';
  @Input() amount: number = 112893;
  @Input() trendTitle: string = 'trend title';
  @Input() trendPercent: number = 70.5;
  @Input() trendPositive: boolean = true;
  
}
