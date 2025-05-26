import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { AccessGuard } from 'src/app/services/access.guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent,canActivate: [AccessGuard]},
      { path: '', component: DashboardComponent,canActivate: [AccessGuard]},
      { path: 'product', component: ProductPageComponent },
      { path: 'addproduct', component: AddEditProductComponent },
      { path: 'editproduct', component: AddEditProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
