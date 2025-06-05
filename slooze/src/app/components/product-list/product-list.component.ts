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
  groupByCategory: string = 'none';
  groupedProducts: { [key: string]: any[] } = {};
  categoryVisibility: { [key: string]: boolean } = {};
  

  constructor(private dataService: DataService, private router:Router, private apiService:ApiService, private route: ActivatedRoute) {
    this.getProducts().then(this.groupProducts.bind(this));
  }

  async getProducts() {
    return new Promise(async (resolve, reject) => {
      this.products = await this.apiService.getProducts(20);
      resolve('got products');
    })
  }
    
  editProduct(product: any) {
   this.dataService.setData(product);
   this.router.navigate(['/home/editproduct']);
  }

  groupProducts() {
    if (this.groupByCategory === 'category') {
      this.groupedProducts = this.products?.reduce((acc:any, product:any) => {
        const key = product.product_category || 'Uncategorized';
        acc[key] = acc[key] || [];
        acc[key].push(product);
        return acc;
      }, {} as { [key: string]: any[] }) || {};
    } else {
      this.groupedProducts = { All: this.products || [] };
    }
  }

  toggleCategory(category: string) {
    this.categoryVisibility[category] = !this.categoryVisibility[category];
  }

  objectKeys = Object.keys;

}
