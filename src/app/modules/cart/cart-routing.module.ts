import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./component/cart/cart.component";

const routes: Routes = [
    { path: '', redirectTo: 'summary', pathMatch: 'full' },
    { path: 'summary', component: CartComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule { }