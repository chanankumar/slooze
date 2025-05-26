import { Component } from '@angular/core';
import { constants } from 'src/app/app-constants';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  constants = constants
  
}
