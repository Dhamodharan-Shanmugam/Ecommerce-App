import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { DiscountPricePipeModule } from "src/app/shared/pipes/discountPrice.pipe";
import { BillingAddressComponent } from "./components/billing-address/billing-address.component";
import { OrderConformationComponent } from "./components/order-conformation/order-conformation.component";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";
import { OrderComponent } from "./components/order/order.component";
import { PaymentInformationComponent } from "./components/payment-information/payment-information.component";
import { OrderRoutingModule } from "./order-routing.module";
import { CreditCardDirective } from './directives/credit-card.directive';

@NgModule({
    declarations: [
        BillingAddressComponent,
        OrderComponent,
        OrderConformationComponent,
        OrderSummaryComponent,
        PaymentInformationComponent,
        CreditCardDirective
    ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        DiscountPricePipeModule
    ]
})
export class OrderModule {

}