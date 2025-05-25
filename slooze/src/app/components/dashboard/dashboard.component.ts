import { Component } from '@angular/core';
import { constants } from 'src/app/app-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constants = constants
  novdecTicks(value: any, index: number, ticks: any) {
    const labels = ['Nov 20th', 'Nov 23th', 'Nov 26th', 'Nov 29th', 'Dec 1st', 'Dec 4th', 'Dec 7th', 'Dec 10th', 'Dec 13th', 'Dec 15th', 'Dec 18th', 'Dec 20th'];
      return (labels[index] === 'Nov 20th' || labels[index] === 'Dec 20th') ? labels[index] : '';
  }

}
