import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Product } from "../models/product.model";
import { ProductsService } from "../services/products.service";

@Injectable({ providedIn: 'root' })
export class ProductResolveGuard implements Resolve<Product>{

    constructor(private productsService: ProductsService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product {
        let productId = route.params['product-id']
        let product = this.productsService.getProduct(+ productId);
        if (product) {
            return product;
        }
        else {
            this.router.navigate(['/page-not-found']);
            return null;
        }

    }

}