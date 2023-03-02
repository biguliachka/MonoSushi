import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoComponent } from './product-info.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";


describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoComponent ],
      imports:
        [HttpClientTestingModule,
        RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  const FAKE_PRODUCT = {
    id: 6,
    category: {
      id: 10,
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
    component.productCount(FAKE_PRODUCT, false);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT.count).toBe(1);
    const FAKE_PRODUCT2 = {
      id: 12,
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
      count: 12
    }
    component.productCount(FAKE_PRODUCT2, true);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT2.count).toBe(13);
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
    spyOn(component, 'addToBasket').and.callThrough();
    component.addToBasket(FAKE_PRODUCT);
    expect(component.addToBasket).toHaveBeenCalled();
    expect(FAKE_PRODUCT.count).toBe(1);
  });

});
