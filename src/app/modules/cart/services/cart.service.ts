import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Cart } from "../models/cart.model";
import { ProductsService } from "../../products/services/products.service";
import { UserService } from "../../../shared/services/user.service";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: Cart[] = [];

    constructor(private productsService: ProductsService, private userService: UserService) {
        this.userService.$userActive.subscribe(data => {
            if (data === true) {
                console.log('subscription called');
                this.getUserCart();
            }
        });
    }

    $cart: Subject<Cart[]> = new BehaviorSubject([]);
    $productCount: Subject<number> = new BehaviorSubject(0);
    $totalPrice: Subject<number> = new BehaviorSubject(0);
    $discountPrice: Subject<number> = new BehaviorSubject(0);
    $shippingPrice: Subject<number> = new BehaviorSubject(0);
    $cartPrice: Subject<number> = new BehaviorSubject(0);

    getUserCart() {
        let cart = this.userService.getCart();
        cart.forEach(data => { this.addProduct(data.id, data.quantity) });
        this.$cart.next(this.cart);
        this.getCart()
    }

    addProduct(id: number, quantity: number = 1): void {
        let product;
        let productPresent = false;
        if (this.cart.length > 0) {
            this.cart.forEach(data => {
                if (data['id'] === id) {
                    data['quantity'] = data['quantity'] + quantity;
                    productPresent = true;
                    return false;
                }
            });
            if (!productPresent) {
                product = this.productsService.getProduct(id);
                if (product) {
                    this.cart.push({ id: id, quantity: quantity, product: product });
                }
            }
        }
        else {
            product = this.productsService.getProduct(id);
            if (product) {
                this.cart.push({ id: id, quantity: quantity, product: product });
            }
        }
        this.$cart.next(this.cart);
        this.priceCalculator();
        this.$productCount.next(this.cart.length);
    }

    removeQuantity(id: number): void {
        if (this.cart.length > 0) {
            this.cart.forEach(data => {
                if (data['id'] === id) {
                    data['quantity'] = data['quantity'] - 1;
                    if (data['quantity'] < 1) {
                        this.deleteProduct(id);
                    }
                    return false;
                }
            });
        }
        this.$cart.next(this.cart);
        this.priceCalculator();
        this.$productCount.next(this.cart.length);
    }

    addQuantity(id: number): void {
        if (this.cart.length > 0) {
            this.cart.forEach(data => {
                if (data['id'] === id) {
                    data['quantity'] = data['quantity'] + 1;
                    return false;
                }
            });
        }
        this.$cart.next(this.cart);
        this.priceCalculator();
        this.$productCount.next(this.cart.length);
    }

    deleteProduct(id: number): void {
        this.cart = this.cart.filter(prod => prod.id != id);
        this.$cart.next(this.cart);
        this.priceCalculator();
        this.$productCount.next(this.cart.length);
    }

    getCart(): Cart[] {
        if (this.cart.length > 0) {
            this.priceCalculator();
            return this.cart;
        }
        else {
            return [];
        }
    }

    priceCalculator(): void {
        let _totalPrice = 0;
        let _discountPrice = 0;
        let _shippingPrice = 0;
        let _cartPrice = 0;
        if (this.cart.length > 0) {
            this.cart.forEach(product => {
                _totalPrice = _totalPrice + (product.product.price * product.quantity);
                _discountPrice = _discountPrice + this.discountCalculator(product.product.price, product.product.discount, product.quantity);
            });

            if (_discountPrice < 500) {
                _shippingPrice = 50;
            }
            else {
                _shippingPrice = 0;
            }
            this.$totalPrice.next(_totalPrice);
            this.$discountPrice.next(_discountPrice);
            this.$shippingPrice.next(_shippingPrice);
        }
        else {
            _totalPrice = 0;
            _discountPrice = 0;
            _shippingPrice = 0;
            _cartPrice = 0;
            this.$totalPrice.next(_totalPrice);
            this.$discountPrice.next(_discountPrice);
            this.$shippingPrice.next(_shippingPrice);
        }
        _cartPrice = _discountPrice + _shippingPrice;
        this.$cartPrice.next(_cartPrice);
        this.$productCount.next(this.cart.length);
    }

    discountCalculator(totalPrice, discountPrice, quantity): number {
        if (!discountPrice) {
            return totalPrice * quantity;
        }
        return (totalPrice - ((totalPrice * discountPrice) / 100)) * quantity;
    }

    getProductCount(): void {
        if (this.cart.length) {
            this.$productCount.next(this.cart.length);
        }
    }

    emptyCart() {
        this.$cart.next(this.cart = []);
        this.priceCalculator();
        this.$productCount.next(this.cart.length);
    }
}
