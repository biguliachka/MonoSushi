import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {DostavkaTaOplataRoutingModule} from "./dostavka-ta-oplata-routing.module";
import {DostavkaTaOplataComponent} from "./dostavka-ta-oplata.component";



@NgModule({
  declarations: [
    DostavkaTaOplataComponent
  ],
  imports: [
    CommonModule,
    DostavkaTaOplataRoutingModule,
    SharedModule
  ]
})
export class DostavkaTaOplataModule { }
