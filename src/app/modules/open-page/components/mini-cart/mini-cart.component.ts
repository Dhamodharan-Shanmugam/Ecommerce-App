import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { Cart } from 'src/app/modules/cart/models/cart.model';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {

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

  cleanCart() {
    this.cartService.emptyCart();
  }

}
