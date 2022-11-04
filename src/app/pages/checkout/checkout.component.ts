import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, CheckboxRequiredValidator } from '@angular/forms';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public total = 0;
  public count = 0;
  public img!: string;
  public name!: string;
  private basket: Array<IProductResponse> = [];
  public coment = false;
  public comentKitchen = false;
  public selectValue ='1';
  public selectArray = [1];
  public num!: number;

  constructor(private orderService: OrderService,) { }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();

  }
  addComent(): void {
    this.coment = !this.coment
  }
  addComentKitchen(): void {
    this.comentKitchen = !this.comentKitchen
  }
  select(event: Event): void {
    this.selectArray = []
    this.num = parseInt(this.selectValue.split(' ')[0])
    for (let i = 1; i <= this.num; i++) {
      this.selectArray.push(i)
    }
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
