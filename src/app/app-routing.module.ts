import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import { AuthGuard } from './shared/guards/auth/auth.guard';
import {CallComponent} from "./components/call/call.component";


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {path: 'call', component: CallComponent},
  {
    path: 'actions',
    loadChildren: () => import('./pages/actions/actions.module').then(m => m.ActionsModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'product/:category',
    loadChildren: () => import('./pages/product-category/product-category-routing.module').then(m => m.ProductCategoryRoutingModule)
  },
  {
    path: 'dostavka-ta-oplata',
    loadChildren: () => import('./pages/dostavka-ta-oplata/dostavka-ta-oplata.module').then(m => m.DostavkaTaOplataModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/admin-auth/admin-auth.module').then(m => m.AdminAuthModule)
  },
  {
    path: 'cabinet',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cabinet/cabinet.module').then(m => m.CabinetModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
