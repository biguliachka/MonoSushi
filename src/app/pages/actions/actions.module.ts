import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {ActionsComponent} from "./actions.component";
import {ActionsRoutingModule} from "./actions-routing.module";
import {ActionInfoComponent} from "./actions-info/action-info.component";



@NgModule({
  declarations: [
    ActionsComponent,
    ActionInfoComponent
  ],
  imports: [
    CommonModule,
    ActionsRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ActionsModule { }
