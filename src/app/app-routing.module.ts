import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { HomePageComponent } from './modules/open-page/components/home-page/home-page.component';
import { NotFoundComponent } from './modules/open-page/components/not-found/not-found.component';
import { UserPresentGuard } from './shared/guards/user-present.guard';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(module => module.ProductsModule), data: { preload: true, delay: false } },
  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(module => module.CartModule), data: { preload: true, delay: true }, },
  { path: 'logging', loadChildren: () => import('./modules/logging/logging.module').then(module => module.LoggingModule), data: { preload: false }, },
  { path: 'order', loadChildren: () => import('./modules/order/order.module').then(module => module.OrderModule), canLoad: [UserPresentGuard], canActivate: [UserPresentGuard] },
  { path: 'page-not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@Injectable({
  providedIn: 'root'
})
export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay) => delay
      ? timer(2000).pipe(flatMap(_ => load()))
      : load();
    return route.data && route.data['preload'] ? loadRoute(route.data['delay']) : of(null);
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
