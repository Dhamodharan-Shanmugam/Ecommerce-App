import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SearchPipeModule } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { DiscountPricePipeModule } from '../../shared/pipes/discountPrice.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    SearchPipeModule,
    DiscountPricePipeModule
  ]
})
export class ProductsModule {

}
