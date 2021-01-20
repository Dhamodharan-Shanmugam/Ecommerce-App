import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discountPrice'
})
export class DiscountPrice implements PipeTransform {

    transform(discount: number, price: number): number {
        if (discount && price) {
            return price - ((price * discount) / 100);
        }
        else if (!discount) {
            return price;
        }
        else if (!price) {
            return null;
        }
    }
}


@NgModule({
    declarations: [DiscountPrice],
    exports: [DiscountPrice],
})
export class DiscountPricePipeModule { }