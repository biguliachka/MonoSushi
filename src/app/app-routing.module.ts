import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { DostavkaTaOplataComponent } from './pages/dostavka-ta-oplata/dostavka-ta-oplata.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { AdminComponent } from './admin/admin.component';
import { AdminActionComponent } from './admin/admin-action/admin-action.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProductInfoResolver } from './shared/services/product/product-info.resolver';
import { ActionInfoResolver } from './shared/services/action/action-info.resolver';
import { ActionInfoComponent } from './pages/actions-info/action-info.component';
import { HistoryComponent } from './pages/history/history.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserPasswordComponent } from './pages/user-password/user-password/user-password.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'actions', component: ActionsComponent },
  {
    path: 'action/:id', component: ActionInfoComponent, resolve: {
      actionInfo: ActionInfoResolver
    }
  },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product-category/:category', component: ProductCategoryComponent },
  {
    path: 'product-category/:category/:id', component: ProductInfoComponent, resolve: {
      productInfo: ProductInfoResolver
    }
  },
  { path: 'dostavka-ta-oplata', component: DostavkaTaOplataComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'cabinet', component: CabinetComponent, canActivate: [AuthGuard] },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'category', component: AdminCategoryComponent },
      { path: 'action', component: AdminActionComponent },
      { path: 'product', component: AdminProductComponent }
    ]
  },
  { path: 'user-password', component: UserPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
