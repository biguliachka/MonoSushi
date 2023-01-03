import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminActionComponent } from './admin-action/admin-action.component';
import { AdminProductComponent } from './admin-product/admin-product.component';



const routes: Routes = [
  {
    path: '', component : AdminComponent, children: [
      { path: 'category', component: AdminCategoryComponent },
      { path: 'action', component: AdminActionComponent },
      { path: 'product', component: AdminProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
