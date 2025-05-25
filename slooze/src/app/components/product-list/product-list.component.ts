import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.sharing';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {



  products:any = null;

  constructor(private dataService: DataService, private router:Router, private apiService:ApiService, private route: ActivatedRoute) {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.apiService.getProducts(20);
  }
    
  editProduct(product: any) {
   this.dataService.setData(product);
   this.router.navigate(['/home/editproduct']);
  }
}
