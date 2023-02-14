import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddProductComponent } from './shop-add-product.component';

describe('ShopAddProductComponent', () => {
  let component: ShopAddProductComponent;
  let fixture: ComponentFixture<ShopAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
