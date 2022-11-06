import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Http2Server } from 'http2';
import { relative } from 'path';
import { ROLE } from 'src/app/shared/constants/role.constant';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { AuthComponent } from '../auth/auth.component';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public burgerMenu = false;
  public userMenu = false;
  public isBasket = false;
  public openAutorization = false;
  public isLogin = false;
  public loginUrl = '';
  public loginPage = '';
  public ndex = 4;

  BurgerMenu(): void {
    this.burgerMenu = !this.burgerMenu
  }

  public total = 0;
  public count = 0;
  public img!: string;
  public name!: string;
  private basket: Array<IProductResponse> = [];

  constructor(
    private orderService: OrderService,
    private accountService: AccountService,
    public dialog: MatDialog,
    public basketDialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
  }

  loadBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
      this.count = JSON.parse(localStorage.getItem('basket') as string)[0].count
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
    if (this.isBasket == true) {
      this.basketDialog.open(BasketComponent, {
        backdropClass: 'basket-dialog-back',
        panelClass: 'basket-dialog',
        autoFocus: false,
        closeOnNavigation: true
      }).afterClosed().subscribe(result => {
        console.log(result);
      })
    }
    else if (this.isBasket == false) {
     this.closeModal()
    }
  }

closeModal():void{
   this.basketDialog.closeAll()
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
}


