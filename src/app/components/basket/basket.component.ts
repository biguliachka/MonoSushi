import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public total = 0;
  public count = 0;
  public img!: string;
  public name!: string;
  private basket: Array<IProductResponse> = [];
  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
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
 
 
 }
