import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/modules/cart/models/cart.model';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  cartProducts: Cart[] = [];
  totalPrice: number = 0;
  discountPrice: number = 0;
  shippingPrice: number = 0;
  cartPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getOrderSummary();
  }

  getOrderSummary() {
    this.cartService.$cart.subscribe(data => {
      this.cartProducts = data;
    });
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

}
