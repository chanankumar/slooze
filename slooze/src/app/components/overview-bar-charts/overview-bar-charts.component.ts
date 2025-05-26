import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartData, Chart  } from 'chart.js';

@Component({
  selector: 'app-overview-bar-charts',
  templateUrl: './overview-bar-charts.component.html',
  styleUrls: ['./overview-bar-charts.component.css']
})
export class OverviewBarChartsComponent implements AfterViewInit{

  @Input({required : true}) stepSize!:number;
  @Input({required : true}) maxValue!:number;
  @Input({required : true}) labelNeeded!:boolean;
  @Input({required : true}) stack!:boolean;
  @Input({required : true}) barChartData!: ChartData<'bar'>;
  
  public barChartOptions!: ChartOptions<'bar'>;

  public barChartType: 'bar' = 'bar';

   chartAreaBackgroundPlugin = {
  id: 'chartAreaBackground',
  beforeDatasetsDraw: (chart: { ctx: any; chartArea: any; scales: any; }) => {
    const { ctx, chartArea, scales } = chart;
    const xScale = scales.x;
    const labels = xScale.getLabels();
    const barWidth = xScale.getPixelForValue(labels[1]) - xScale.getPixelForValue(labels[0]);

    ctx.save();
    for (let i = 0; i < labels.length; i++) {
      if (i % 2 === 0) {
        const center = xScale.getPixelForValue(labels[i]);
        const left = center - barWidth / 2;

        ctx.fillStyle = '#f2f4f4';
        ctx.fillRect(left, chartArea.top, barWidth, chartArea.bottom - chartArea.top);
      } else {
        const center = xScale.getPixelForValue(labels[i]);
        const left = center - barWidth / 2;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(left, chartArea.top, barWidth, chartArea.bottom - chartArea.top);
      }
    }
    ctx.restore();
  }
}



  assignValue() {
      this.barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        stacked: this.stack,
        grid: { display: false },
        ticks : {
          display : this.labelNeeded
        }
      },
      y: {
        stacked: this.stack,
        beginAtZero: true,
        grid: { display: false },
        ticks: {
          stepSize: this.stepSize,
          display : this.labelNeeded
        },
      },
    },
    };
  }
  
  ngAfterViewInit(): void {
    this.assignValue();
  }


};


  
