import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from 'src/app/app-constants';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  constants = constants
  
  constructor(private router: Router) {}

  goToAddProduct() {
    this.router.navigate(['/home/addproduct']);
  }
}
