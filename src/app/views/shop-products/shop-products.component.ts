import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css']
})
export class ShopProductsComponent {



  products: {name:"",price:0}  [] = [];

  subscription: Subscription;

  constructor(private productService: StockService) {

    window.addEventListener('storage', () => {

      let data  = localStorage.getItem('crossTabTest');
    
      console.log('Changed Value = ', data);

    });

    this.subscription = this.productService.getItem().subscribe(item => { this.products.push( item) });
  }


}
