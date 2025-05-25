import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Input() type!: string;
}
