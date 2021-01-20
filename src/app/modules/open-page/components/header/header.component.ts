import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService, private userService: UserService, private router: Router) { }

  toatlItem: number;
  userName: string;
  openMincart: boolean = false;

  ngOnInit() {
    this.cartService.$productCount.subscribe(data => {
      this.toatlItem = data;
    });
    this.userService.$userActive.subscribe(data => {
      if (data) {
        this.getUserName();
      }
      else {
        this.userName = null;
      }
    });
  }

  getUserName() {
    this.userName = this.userService.userName;
  }

  signOut() {
    this.cartService.emptyCart();
    this.userService.signOut();
    this.router.navigate(['/home']);
  }

}
