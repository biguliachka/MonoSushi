import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { DostavkaTaOplataComponent } from './pages/dostavka-ta-oplata/dostavka-ta-oplata.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { AdminActionComponent } from './admin/admin-action/admin-action.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminComponent } from './admin/admin.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ActionInfoComponent } from './pages/actions-info/action-info.component';
import { HistoryComponent } from './pages/history/history.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserPasswordComponent } from './pages/user-password/user-password/user-password.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminAuthComponent } from './components/admin-auth/admin-auth.component';
import { BasketComponent } from './components/basket/basket.component';

import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActionsComponent,
    ProductCategoryComponent,
    DostavkaTaOplataComponent,
    AboutUsComponent,
    AdminActionComponent,
    AdminCategoryComponent,
    AdminComponent,
    AdminProductComponent,
    ProductInfoComponent,
    ActionInfoComponent,
    HistoryComponent,
    CabinetComponent,
    CheckoutComponent,
    UserPasswordComponent,
    AuthComponent,
    AdminAuthComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
