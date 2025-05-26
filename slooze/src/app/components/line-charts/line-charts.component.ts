import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.css']
})
export class LineChartsComponent implements AfterViewInit{


  @Input({'required' : true}) ticks!:any;
  @Input({'required' : true}) lineChartData!:ChartData<'line'>;
  lineChartOptions!: ChartOptions<'line'>;

  @Input({required : true}) title!: string;
  @Input({required : true}) amount!: number;
  @Input({required : true}) trendTitle!: string;
  @Input({required : true}) trendPercent!: number;
  @Input({required : true}) trendPositive!: boolean;
  @Input({required : true}) amountValue!: boolean;
  @Input() overlapDetails: boolean = false;
  @Input() showOverviewFilter: boolean = false;
  

  backgroundStripPlugin = {
  id: 'customBackgroundStrips',
  beforeDatasetsDraw: (chart: { ctx: any; chartArea: any; scales: { x: any; }; }) => {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    const xScale = chart.scales.x;

    ctx.save();
    const tickCount = xScale.getLabels().length;

    for (let i = 0; i < tickCount - 1; i++) {
      if (i % 2 === 0) {
        const left = xScale.getPixelForTick(i);
        const right = xScale.getPixelForTick(i + 1);
        const width = right - left;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(left, chartArea.top, width, chartArea.bottom - chartArea.top);
      } else {
                const left = xScale.getPixelForTick(i);
        const right = xScale.getPixelForTick(i + 1);
        const width = right - left;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(left, chartArea.top, width, chartArea.bottom - chartArea.top);
      }
    } 
    ctx.restore();
  }
};

  assignValue() {
this.lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: {
          color: '#e5e7eb', // grid line on every tick
          drawTicks: false,
          drawOnChartArea: true,
          drawBorder: false,
        },
        ticks: 
          this.ticks,
      },
      y: {
        grid: {
            color: '#94a3b8',
          drawBorder: false,
        },
        ticks: {
          display: false, 
        },
      }
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        hoverRadius: 6,
        hitRadius: 30,
      }
    }
  };
  }

  ngAfterViewInit(): void {
    this.assignValue();
  }


  lineChartPlugins = [this.backgroundStripPlugin];

}
