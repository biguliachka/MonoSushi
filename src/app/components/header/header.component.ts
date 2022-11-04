import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { threadId } from 'worker_threads';
import { ROLE } from 'src/app/shared/constants/role.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public burgerMenu = false;
  public userMenu = false;
  public openBasket = false;
  public openAutorization = false;
  public authForm!: FormGroup;

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
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
    this.initAuthForm();   
  }

  loadBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
      this.count = JSON.parse(localStorage.getItem('basket') as string)[0].count
      this.img = JSON.parse(localStorage.getItem('basket') as string)[0].imagePath
      this.name = JSON.parse(localStorage.getItem('basket') as string)[0].name   
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
    if (!localStorage.currentUser) {
      this.userMenu = false
    }
    else if (JSON.parse(localStorage.currentUser).role === ROLE.USER) {
      this.userMenu = !this.userMenu
    }
    else if (JSON.parse(localStorage.currentUser).role === ROLE.ADMIN) {
      this.router.navigate(['/admin/action']);
    }
  }
  OpenBasket(): void {
    this.openBasket = !this.openBasket
  }

  OpenAutorization(): void {
    if (!localStorage.currentUser) {
      this.openAutorization = !this.openAutorization
    }
    else {
      this.openAutorization = false
    }
  }


  initAuthForm(): void {
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  login(): void {
    this.accountService.login(this.authForm.value).subscribe(data => {
      if (data && data.length > 0) {
        const user = data[0];
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.accountService.isUserLogin$.next(true);
        if (user && user.role === ROLE.USER) {
          this.router.navigate(['/cabinet']);
        } else if (user && user.role === ROLE.ADMIN) {
          this.router.navigate(['/admin/action']);
        }
        this.authForm.reset()
        this.OpenAutorization()
      }
    }, (e) => {
      console.log(e);
    })
  }

  logout(): void {
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
    this.accountService.isUserLogin$.next(true);
  }
}


