import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(products: Product[], searchValue: string = ''): Product[] {
        if (searchValue) {
            searchValue = searchValue.toLowerCase();
            const searchedProduct = products.filter(product => {
                return product.name.includes(searchValue) || product.type.includes(searchValue);
            }
            )
            return searchedProduct.length > 0 ? searchedProduct : products;
        }
        else return products;
    }
}


@NgModule({
    declarations: [SearchPipe],
    exports: [SearchPipe],
})
export class SearchPipeModule { }