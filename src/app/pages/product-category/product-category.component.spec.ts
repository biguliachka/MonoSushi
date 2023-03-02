import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryComponent } from './product-category.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('ProductCategoryComponent', () => {
  let component: ProductCategoryComponent;
  let fixture: ComponentFixture<ProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryComponent ],
      imports:
        [HttpClientTestingModule,
        RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should change product count', () => {
    const FAKE_PRODUCT = {
      id: 127,
      category: {
        id: 92,
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
    spyOn(component, 'productCount').and.callThrough();
    component.productCount(FAKE_PRODUCT, true);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT.count).toBe(3);
    const FAKE_PRODUCT2 = {
      id: 21,
      category: {
        id: 22,
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
      count: 9
    }
    component.productCount(FAKE_PRODUCT2, false);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT2.count).toBe(8);
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
  it('it should change basket', () => {
    const FAKE_PRODUCT = {
      id: 127,
      category: {
        id: 92,
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
      count: 1
    }
    spyOn(component, 'addToBasket').and.callThrough();
    component.addToBasket(FAKE_PRODUCT);
    expect(component.addToBasket).toHaveBeenCalled();
    expect(FAKE_PRODUCT.count).toBe(1);
  });

});
