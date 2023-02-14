import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockService } from './service/stock.service';
import { ShopAddProductComponent } from './views/shop-add-product/shop-add-product.component';
import { ShopProductsComponent } from './views/shop-products/shop-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopAddProductComponent,
    ShopProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
