import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { Location } from '@angular/common';

type DropdownKey = 'dashboard' | 'store' | 'analytic' | 'finances' | 'account' | 'help';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  dropdowns: Record<DropdownKey, boolean> = {
    dashboard: false,
    store: false,
    analytic: false,
    finances: false,
    account: false,
    help: false
  };

  isProductSelected = false;
  productDetailsSelected = false;

  constructor(private router: Router,  private location: Location) {}

  ngOnInit() {
      this.router.events.subscribe(val => {
        if(this.location.path().includes('/product')) {
          this.isProductSelected = true;
          this.productDetailsSelected = false;
        } else if(this.location.path().includes('/addproduct') || this.location.path().includes('/editproduct')) {
          this.productDetailsSelected = true;
          this.isProductSelected = false;
        }               
      }
    )
  }
  toggleDropdown(name: DropdownKey) {
    this.dropdowns[name] = !this.dropdowns[name];
  }

  goToProductPage() {
    this.productDetailsSelected = false;
    this.router.navigate(['/home/product']);
  }

  goToAddProductPage() {
    this.isProductSelected = false;
    this.router.navigate(['/home/addproduct']);
  }

    goToDashboard() {
    this.isProductSelected = false;
    this.router.navigate(['/home/dashboard']);
  }
}