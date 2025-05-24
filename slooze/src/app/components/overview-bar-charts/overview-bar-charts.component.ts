import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartData, Chart  } from 'chart.js';

@Component({
  selector: 'app-overview-bar-charts',
  templateUrl: './overview-bar-charts.component.html',
  styleUrls: ['./overview-bar-charts.component.css']
})
export class OverviewBarChartsComponent {
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 6000,
        ticks: {
          stepSize: 1500
        },
        grid: {
          display: false
        }
      }
    }
  };

  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [1500, 4600, 1000, 4800, 3000, 3400, 4600, 2900, 500, 3200, 1300, 3100],
        backgroundColor: '#3399FF',
        hoverBackgroundColor: '#1f78d1',
        barPercentage : 1.0
      }
    ]
  };

  public barChartType: 'bar' = 'bar'; // literal type

  constructor() {
    // this.registerChartAreaBackgroundPlugin();
  }

  // Register custom plugin for gray chart area background
//  registerChartAreaBackgroundPlugin() {
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
};


  
