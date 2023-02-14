import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StockService } from 'src/app/service/stock.service';

@Component({
  selector: 'app-shop-add-product',
  templateUrl: './shop-add-product.component.html',
  styleUrls: ['./shop-add-product.component.css']
})
export class ShopAddProductComponent {

  inventory!:  FormGroup;

  constructor(private _formBuilder:FormBuilder,private _productService: StockService){}


  ngOnInit() {

    this.initForm();
  }

  initForm(){


    this.inventory = this._formBuilder.group(
      { 
        name: new FormControl(),
        price: new FormControl()
    
      });
    
  }

addProduct() {

  console.log(this.inventory.value);

  this._productService.createItem(this.inventory.value);

  localStorage.setItem('crossTabTest', JSON.stringify(this.inventory.value));
}

onFormSubmit() {
  let data = JSON.stringify(this.inventory);
}

}
