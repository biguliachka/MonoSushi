import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { BasketComponent } from './components/basket/basket.component';
import {AuthComponent} from "./components/auth/auth.component";
import { CallComponent } from './components/call/call.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from "@angular/common/http";
import {ProductCategoryModule} from "./pages/product-category/product-category.module";
import {ActionsModule} from "./pages/actions/actions.module";
import {MatDialogModule} from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasketComponent,
    AuthComponent,
    CallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductCategoryModule,
    ActionsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
