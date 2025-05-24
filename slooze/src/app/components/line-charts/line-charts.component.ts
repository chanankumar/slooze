import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.css']
})
export class LineChartsComponent{

  lineChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [30, 25, 20, 35, 90, 45, 50, 55, 60, 58, 59, 61],
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74,222,128,0.1)',
        pointBackgroundColor: '#4ade80',
        pointBorderColor: '#ffffff',
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
      {
        data: [45, 40, 35, 30, 30, 35, 38, 37, 39, 41, 44, 46],
        borderColor: '#cbd5e1',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#cbd5e1',
        pointRadius: 5,
        tension: 0.4,
        fill: false,
      }
    ]
  };

  backgroundStripPlugin = {
  id: 'customBackgroundStrips',
  beforeDraw: (chart: { ctx: any; chartArea: any; scales: { x: any; }; }) => {
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

        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(left, chartArea.top, width, chartArea.bottom - chartArea.top);
      }
    }
    ctx.restore();
  }
};

  lineChartOptions: ChartOptions<'line'> = {
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
        ticks: {
          color: '#94a3b8',
        }
      },
      y: {
        grid: {
          display: false,
          drawTicks: false,
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

  lineChartPlugins = [this.backgroundStripPlugin];

}
