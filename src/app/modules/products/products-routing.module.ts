import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductResolveGuard } from './guards/product-resolve-guard';


const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: ProductsComponent },
    { path: ':product-id', component: ProductDetailsComponent, resolve: { product: ProductResolveGuard } },
    { path: '**', redirectTo: 'search' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
