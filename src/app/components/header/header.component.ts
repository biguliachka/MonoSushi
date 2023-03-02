import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROLE } from 'src/app/shared/constants/role.constant';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { AuthComponent } from '../auth/auth.component';
import { BasketComponent } from '../basket/basket.component';
import {CallComponent} from "../call/call.component";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public burgerMenu = false;
  public userMenu = false;
  public isBasket = false;
  public close =false

  BurgerMenu(): void {
    this.burgerMenu = !this.burgerMenu
  }
public isCall = false;
  public total = 0;
  public count = 0;
  public img!: string;
  public name!: string;
  public basket: Array<IProductResponse> = [];

  constructor(
    private orderService: OrderService,
    private accountService: AccountService,
    public dialog: MatDialog,
    public basketDialog: MatDialog,
    public callDialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
  }

  loadBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
      this.count = this.basket
        .reduce((count: number, prod: IProductResponse) => count + prod.count , 0);
    }
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.total = this.basket
      .reduce((total: number, prod: IProductResponse) => total + prod.count * prod.price, 0);
  }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    })
  }

  UserMenu(): void {
  }
  OpenBasket(): void {
    this.isBasket = !this.isBasket
    if (this.isBasket ) {
      this.close = true
      this.basketDialog.open(BasketComponent, {
        backdropClass: 'basket-dialog-back',
        panelClass: 'basket-dialog',
        autoFocus: false,
        closeOnNavigation: true
      }).afterClosed().subscribe(result => {
        console.log(result);
      })
    }
    else {
     this.closeModal()
    }
  }

closeModal():void{
    if (this.close ){
      this.basketDialog.closeAll()
      this.isBasket =false
      this.close = false
    }

}

  logout(): void {
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
    this.accountService.isUserLogin$.next(true);
    this.userMenu = !this.userMenu
  }

  openLoginDialog(): void {
    if (!localStorage.currentUser) {
      this.userMenu = false,
        this.isBasket = false,
        this.dialog.open(AuthComponent, {
          backdropClass: 'dialog-back',
          panelClass: 'auth-dialog',
          autoFocus: false
        }).afterClosed().subscribe(result => {
          console.log(result);
        })
    }
    else if (JSON.parse(localStorage.currentUser).role === ROLE.USER) {
      this.userMenu = !this.userMenu
    }
    else if (JSON.parse(localStorage.currentUser).role === ROLE.ADMIN) {
      this.router.navigate(['/admin/action']);
    }

  }
  OpenCallDialog(): void {
    this.isCall = !this.isCall
    if (this.isCall) {
      this.callDialog.open(CallComponent, {
        backdropClass: 'call-dialog-back',
        panelClass: 'call-dialog',
        autoFocus: false
      }).afterClosed().subscribe(result => {
        console.log(result);
      })
    }
    else {
      this.closeModal()
    }
  }
}


