import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActionsComponent} from "./actions.component";
import {ActionInfoComponent} from "./actions-info/action-info.component";
import {ActionInfoResolver} from "../../shared/services/action/action-info.resolver";



const routes: Routes = [
  {path: '', component : ActionsComponent},
  {path: ':id', component :ActionInfoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule { }
