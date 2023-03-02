import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketComponent } from './basket.component';
import {RouterTestingModule} from "@angular/router/testing";
import {IProductResponse} from "../../shared/interfaces/product/product.interface";

describe('BasketComponent', () => {
  let component: BasketComponent;
  let fixture: ComponentFixture<BasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketComponent ],
      imports:
        [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  const FAKE_BASKET = [
    {
      id: 1,
      category: {
        id: 2,
        name: 'qqq',
        path: 'string',
        imagePath: 'qqqq',
      },

      name: 'string',
      path: 'string',
      description: 'string',
      weight: 'string',
      price: 10,
      imagePath:'string',
      count: 2
    }
  ]
  const FAKE_PRODUCT = {
    id: 1,
    category: {
      id: 2,
      name: 'qqq',
      path: 'string',
      imagePath: 'qqqq',
    },

    name: 'string',
    path: 'string',
    description: 'string',
    weight: 'string',
    price: 10,
    imagePath:'string',
    count: 2
  }
  it('it should change product count', () => {
    spyOn(component, 'productCount').and.callThrough();
    component.productCount(FAKE_PRODUCT, true);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT.count).toBe(3)
    const FAKE_PRODUCT2 = {
      id: 1,
      category: {
        id: 2,
        name: 'qqq',
        path: 'string',
        imagePath: 'qqqq',
      },

      name: 'string',
      path: 'string',
      description: 'string',
      weight: 'string',
      price: 10,
      imagePath:'string',
      count: 7
    }
    component.productCount(FAKE_PRODUCT2, false);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT2.count).toBe(6);
    const FAKE_PRODUCT3 = {
      id: 1,
      category: {
        id: 2,
        name: 'qqq',
        path: 'string',
        imagePath: 'qqqq',
      },

      name: 'string',
      path: 'string',
      description: 'string',
      weight: 'string',
      price: 10,
      imagePath:'string',
      count: 0
    }
    component.productCount(FAKE_PRODUCT3, false);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT3.count).toBe(0);
  });
  it('it should change total', () => {
    component.basket = FAKE_BASKET;
    spyOn(component, 'getTotalPrice').and.callThrough();
    component.getTotalPrice();
    expect(component.getTotalPrice).toHaveBeenCalled();
    expect(component.total).toBe(20);
  });

});

