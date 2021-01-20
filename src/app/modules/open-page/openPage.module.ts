import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { MiniCartComponent } from './components/mini-cart/mini-cart.component';
import { CustomeClickDirective } from './directives/custome-click.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DiscountPricePipeModule } from "src/app/shared/pipes/discountPrice.pipe";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        MiniCartComponent,
        CustomeClickDirective,
        NotFoundComponent
    ],
    imports: [
        HttpClientModule,
        TranslateModule,
        AppRoutingModule,
        CommonModule,
        DiscountPricePipeModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        HomePageComponent
    ]

})
export class OpenPageModule {

}