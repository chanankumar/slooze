import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overview-tiles',
  templateUrl: './overview-tiles.component.html',
  styleUrls: ['./overview-tiles.component.css']
})
export class OverviewTilesComponent {

  @Input({required : true}) title!: string;
  @Input({required : true}) amount!: number;
  @Input({required : true}) trendTitle!: string;
  @Input({required : true}) trendPercent!: number;
  @Input({required : true}) trendPositive!: boolean;
  @Input({required : true}) amountValue!: boolean;
  @Input() style: boolean = true;
  
}
