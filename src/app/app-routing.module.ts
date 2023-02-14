import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopAddProductComponent } from './views/shop-add-product/shop-add-product.component';
import { ShopProductsComponent } from './views/shop-products/shop-products.component';

const routes: Routes = [

  { path: '', component: ShopProductsComponent },
  { path: 'shop-add-products', component: ShopAddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
