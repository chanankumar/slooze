import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent {
  salesCount = 350;
  
  sales = Array(6).fill({
    name: 'Indra Maulana',
    email: 'Indramaulana@gmail.com',
    amount: 1500
  });
}
