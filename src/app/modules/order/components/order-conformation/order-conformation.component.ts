import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-order-conformation',
  templateUrl: './order-conformation.component.html',
  styleUrls: ['./order-conformation.component.scss']
})
export class OrderConformationComponent implements OnInit {

  constructor(private cartService: CartService, private userService: UserService) { }

  ngOnInit() {
    this.cartService.emptyCart();
    this.userService.deteteBillingAndCardInformation();
  }

}
