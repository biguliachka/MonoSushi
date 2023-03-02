import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  const FAKE_BASKET = [
    {
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
      price: 0,
      imagePath:'string',
      count: 0
    },
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
    count: 91
  }
  it('it should change product count', () => {
    spyOn(component, 'productCount').and.callThrough();
    component.productCount(FAKE_PRODUCT, true);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT.count).toBe(92);
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
      count: 3
    }
    component.productCount(FAKE_PRODUCT2, false);
    expect(component.productCount).toHaveBeenCalled();
    expect(FAKE_PRODUCT2.count).toBe(2);
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
    component.basket = []
    component.getTotalPrice();
    expect(component.getTotalPrice).toHaveBeenCalled();
    expect(component.total).toBe(0);
  });

});
