import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OverviewTilesComponent } from './components/overview-tiles/overview-tiles.component';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { OverviewBarChartsComponent } from './components/overview-bar-charts/overview-bar-charts.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { GridComponent } from './components/grid/grid.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { Guard } from './services/guard.service';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
