import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cart } from 'src/app/modules/cart/models/cart.model';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cartProducts: Cart[] = [];
  cartEmpty: boolean;
  totalPrice: number = 0;
  discountPrice: number = 0;
  shippingPrice: number = 0;
  cartPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getPriceInfo();
    this.getProduct();
    console.log('cart loaded');
    if (this.cartProducts.length < 1) {
      this.cartEmpty = true;
    }
    else {
      this.cartEmpty = false;
    }
  }

  getProduct() {
    this.cartService.$cart.subscribe(data => {
      this.cartProducts = data;
      if (this.cartProducts.length < 1) {
        this.cartEmpty = true;
      }
      else {
        this.cartEmpty = false;
      }
    });

  }
  getPriceInfo() {
    this.cartService.$totalPrice.subscribe(data => {
      this.totalPrice = data;
    });

    this.cartService.$discountPrice.subscribe(data => {
      this.discountPrice = data;
    });
    this.cartService.$shippingPrice.subscribe(data => {
      this.shippingPrice = data;
    });
    this.cartService.$cartPrice.subscribe(data => {
      this.cartPrice = data;
    })
  }

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id);
  }

  addQuantity(id: number) {
    this.cartService.addQuantity(id);
  }

  removeQuantity(id: number) {
    this.cartService.removeQuantity(id);
  }

  goBack() {
    history.back();
  }

  ngOnDestroy() {
    // console.log('on destroy called');
    this.cartService.$cart.unsubscribe;
    this.cartService.$totalPrice.unsubscribe;
    this.cartService.$discountPrice.unsubscribe;
    this.cartService.$shippingPrice.unsubscribe;
    this.cartService.$cartPrice.unsubscribe;

  }

}
