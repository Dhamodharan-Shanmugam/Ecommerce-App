import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { DiscountPricePipeModule } from "src/app/shared/pipes/discountPrice.pipe";
import { CartRoutingModule } from "./cart-routing.module";
import { CartComponent } from "./component/cart/cart.component";

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        CartRoutingModule,
        DiscountPricePipeModule
    ]

})
export class CartModule {
}