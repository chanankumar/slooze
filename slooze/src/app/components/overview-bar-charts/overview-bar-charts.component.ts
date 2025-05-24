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
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
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
        hoverBackgroundColor: '#1f78d1'
      }
    ]
  };

  public barChartType: 'bar' = 'bar'; // literal type

  constructor() {
    this.registerChartAreaBackgroundPlugin();
  }

  // Register custom plugin for gray chart area background
 registerChartAreaBackgroundPlugin() {
    const chartAreaBackgroundPlugin = {
      id: 'chartAreaBackground',
      beforeDraw: (chart: { ctx: any; chartArea: any; }) => {
        const { ctx, chartArea } = chart;
        ctx.save();
        ctx.fillStyle = '#f2f2f2'; // Light gray background
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.width, chartArea.height);
        ctx.restore();
      }
    };

    Chart.register(chartAreaBackgroundPlugin);
  }

  
}
