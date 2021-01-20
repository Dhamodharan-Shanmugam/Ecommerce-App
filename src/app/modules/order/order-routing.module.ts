import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BillingAddressComponent } from "./components/billing-address/billing-address.component";
import { OrderConformationComponent } from "./components/order-conformation/order-conformation.component";
import { OrderComponent } from "./components/order/order.component";
import { PaymentInformationComponent } from "./components/payment-information/payment-information.component";


const routes: Routes = [
    {
        path: '', component: OrderComponent,
        children: [
            { path: '', redirectTo: 'billing-address', pathMatch: 'full' },
            { path: 'billing-address', component: BillingAddressComponent },
            { path: 'payment-info', component: PaymentInformationComponent }
        ]
    },
    { path: 'order-conformation', component: OrderConformationComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {

}