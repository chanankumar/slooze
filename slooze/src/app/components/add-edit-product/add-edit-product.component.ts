import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.sharing';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements AfterContentInit{
  pageTitle = '';
  product = {
    product_name: '',
    product_category: '',
    product_description: '',
    tags: '',
    price: '',
    discount: '',
    discount_category: '',
    revenue:'',
    views:''
  };
  disableButton:boolean = false;
  buttonText:string = 'Save';
  currentPage:string = '';

  constructor(private dataService: DataService, private apiService:ApiService,private router:Router) {
    if(window.location.pathname.split("/").pop() === 'editproduct') {
      this.pageTitle = 'Edit Product';
      this.currentPage = 'Edit';
    } else {
      this.pageTitle = 'Add Product';
      this.currentPage = 'Add';
    }
  }

  save() {
    if(this.currentPage === 'Edit') {
      this.editProductDetails();
    } else {
      this.addProductDetails();
    }
  }

  ngAfterContentInit(): void {
    if(window.location.pathname.split("/").pop() === 'editproduct') {
      this.loadProductDetails();
    }
  }

  onFileDrop(event: any, type: 'preview' | 'thumbnail') {
    const file = event.target.files[0];
    if (file) {
      this.product[type + 'Image' as keyof typeof this.product] = file;
    }
  }

  discardChanges() {
    // Reset the form
    this.product = {
      product_name: '',
      product_category: '',
      product_description: '',
      tags: '',
      price: '',
      discount: '',
      discount_category: '',
      revenue:'',
      views:''
    };
  }

  saveProduct() {
    // Handle the save logic here
    console.log('Product saved:', this.product);
  }

  loadProductDetails() {
    this.dataService.getData().subscribe(data => {
      this.product = data;
    })
  }

  updateProductDetailsOnAssumption() {
    this.product.revenue = '8000';
    this.product.views = '2000';
  }
  editProductDetails() {
    this.updateProductDetailsOnAssumption();
    this.apiService.updateProduct(this.product,this.goToProduct.bind(this));
  }

  addProductDetails () {
    this.updateProductDetailsOnAssumption();
    if(this.product.product_name === '' || this.product.product_name === null || this.product.product_name === undefined) {
      alert('Product Name is requried')
    } else{
      this.apiService.addProduct(this.product,this.goToProduct.bind(this));
    }
  }

  goToProduct() {
    this.updateButtonState();
    this.router.navigate(['/home/product']);
  }

  updateButtonState () {
    this.disableButton = true;
    this.buttonText = 'Saving...';
  }

}
