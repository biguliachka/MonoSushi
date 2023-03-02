import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryComponent } from './admin-category.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Storage} from "@angular/fire/storage";
describe('AdminCategoryComponent', () => {
  let component: AdminCategoryComponent;
  let fixture: ComponentFixture<AdminCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: Storage, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should add category', () => {
    component.editStatus = true
    spyOn(component, 'addCategory').and.callThrough();
    component.addCategory();
    expect(component.addCategory).toHaveBeenCalled();
    expect(component.editStatus).toBe(false);
    component.addCategory();
    expect(component.addCategory).toHaveBeenCalled();
    expect(component.editStatus).toBe(false);
  });
  it('it should category status', () => {
    component.addStatus = true
    spyOn(component, 'addCategoryStatus').and.callThrough();
    component.addCategoryStatus();
    expect(component.addCategoryStatus).toHaveBeenCalled();
    expect(component.addStatus).toBe(false);

  });
  it('it should edit category', () => {
    const FAKE_CATEGORY = {
      id: 1,
      name: 'category.name',
      path: ' category.path',
      imagePath: 'category.imagePath'
    }
    spyOn(component, 'editCategory').and.callThrough();
    component.editCategory(FAKE_CATEGORY);
    expect(component.editCategory).toHaveBeenCalled();
    expect(component.currentCategoryId).toBe(1);

  });



});
