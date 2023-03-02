import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {RouterTestingModule} from "@angular/router/testing";
import {ICategoryResponse} from "../../shared/interfaces/category/category.interface";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:
        [HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should change total', () => {
    component.basket = [];
    spyOn(component, 'getTotalPrice').and.callThrough();
    component.getTotalPrice();
    expect(component.getTotalPrice).toHaveBeenCalled();
    expect(component.total).toBe(0);
  });
  it('it should open basket', () => {
    spyOn(component, 'OpenBasket').and.callThrough();
    component.isBasket = true;
    component.OpenBasket();
    expect(component.OpenBasket).toHaveBeenCalled();
    expect(component.isBasket).toBe(false);
  });
  it('it should close modal', () => {
    component.close = true;
    spyOn(component, 'closeModal').and.callThrough();
    component.closeModal();
    expect(component.closeModal).toHaveBeenCalled();
    expect(component.close).toBe(false);
  });
  it('it should open call dialog', () => {
    component.isCall = true
    spyOn(component, 'OpenCallDialog').and.callThrough();
    component.OpenCallDialog();
    expect(component.OpenCallDialog).toHaveBeenCalled();
    expect(component.isCall).toBe(false);
  });

});


