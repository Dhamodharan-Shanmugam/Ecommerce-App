import { Product } from "../../products/models/product.model";

export interface Cart {
    id: number;
    quantity: number;
    product: Product;
}