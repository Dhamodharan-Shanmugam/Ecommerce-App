import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  searchField: string = '';
  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    console.log('products loaded');
    this.getProducts();
    this.route.fragment.subscribe(data => this.searchField = data);
  }

  getProducts() {
    this.productsService.get().subscribe(data => {
      this.products = data;
    },
      error => {
        window.alert('error occured');
      });
  }

  addToCart(event: Event, id: number, name: string) {
    this.cartService.addProduct(id);
    event.stopPropagation();
    window.alert(name.toUpperCase() + ' added to cart!');
  }
}
