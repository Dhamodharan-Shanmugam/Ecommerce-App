import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    console.log('product details loaded');
    this.route.data.subscribe(data => this.product = { ...data.product }
    );
  }

  addToCart(id: number, name: string) {
    this.cartService.addProduct(id);
    window.alert(name.toUpperCase() + " added to cart!");
    this.router.navigate(['/cart', 'summary']);
  }

  goBack() {
    history.back();
  }
}
