import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductComponent } from './admin-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Storage} from "@angular/fire/storage";
describe('AdminProductComponent', () => {
  let component: AdminProductComponent;
  let fixture: ComponentFixture<AdminProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers:[
        {provide: Storage, useValue: {}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should add product', () => {
    spyOn(component, 'addProduct').and.callThrough();
    component.addProduct();
    expect(component.addProduct).toHaveBeenCalled();
    expect(component.editStatus).toBe(false);

  });
  it('it should product status', () => {
    component.addStatus = true
    spyOn(component, 'addPoductStatus').and.callThrough();
    component.addPoductStatus();
    expect(component.addPoductStatus).toHaveBeenCalled();
    expect(component.addStatus).toBe(false);

  });
  it('it should edit product', () => {
    const FAKE_PRODUCT = {
      id: 2,
      category: {
        id: 141,
        name: 'category.name',
        path: ' category.path',
        imagePath: 'category.imagePath'
      },
      name:' product.name',
      description: 'product.description',
      weight: 'product.weight',
      price:12,
      imagePath: 'product.imagePath',
      path: 'product.path',
      count: 1
    }
    spyOn(component, 'editProduct').and.callThrough();
    component.editProduct(FAKE_PRODUCT);
    expect(component.editProduct).toHaveBeenCalled();
    expect(component.currentProductId).toBe(2);

  });




});
