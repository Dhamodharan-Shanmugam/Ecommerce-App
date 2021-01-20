import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    products: Product[] = [];

    constructor(private http: HttpClient) {
        this.get().subscribe();
    }

    get(): Observable<Product[]> {
        return this.http.get<Product[]>('../assets/datas/productsData.json').pipe(
            map(data => {
                this.products = data;
                return data;
            })
        );
    }

    getProduct(id: number) {
        let product = this.products.find(product => { return product.id === id });
        return product;
    }

}