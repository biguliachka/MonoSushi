import { Component,OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription} from 'rxjs';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { ProductService } from 'src/app/shared/services/product/product.service';


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit, OnDestroy {
  public userProducts: Array<IProductResponse> = [];
  private eventSubscription!: Subscription;
  public currentCategoryName!: string;
  public currentCategoryPath!: string;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {
    this.eventSubscription = this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.loadProducts()
      }
    })
  }

  ngOnInit(): void {
  }

  loadProducts(): void {
    this.productService.getAllFirebase().subscribe(data => {
      console.log(data)
    })
    this.productService.getAllFirebase().subscribe(data => {
      for(let i=0;i<data.length;i++){
        this.userProducts = data as IProductResponse[];
        const categoryName = this.activatedRoute.snapshot.paramMap.get('category') as string;
        if(this.userProducts[i].category.path == categoryName){
          this.currentCategoryName = this.userProducts[i].category.name;
          this.currentCategoryPath = this.userProducts[i].category.path;
        }

      }

    })
  }
  ngOnDestroy(): void {
      this.eventSubscription.unsubscribe();
  }
  productCount(product: IProductResponse, value: boolean): void {
    if(value && product.count >= 1){
      ++product.count;
    } else if(!value && product.count > 1){
      --product.count;
    }
  }

  addToBasket(product: IProductResponse): void {
    let basket: Array<IProductResponse> = [];
    if(localStorage.length > 0 && localStorage.getItem('basket')){
      basket = JSON.parse(localStorage.getItem('basket') as string);
      if(basket.some(prod => prod.id === product.id)){
        const index = basket.findIndex(prod => prod.id === product.id);
        basket[index].count += product.count;
      } else {
        basket.push(product);
      }
    } else {
      basket.push(product);
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    product.count = 1;
    this.orderService.changeBasket.next(true);
  }

}
