import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActionComponent } from './admin-action.component';
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Storage} from "@angular/fire/storage";
import {Firestore} from "@angular/fire/firestore";
import {Auth} from "@angular/fire/auth";
import {AdminCategoryComponent} from "../admin-category/admin-category.component";

describe('AdminActionComponent', () => {
  let component: AdminActionComponent;
  let fixture: ComponentFixture<AdminActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActionComponent ],
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
    fixture = TestBed.createComponent(AdminActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should add action', () => {
    component.editStatus = true
    spyOn(component, 'addAction').and.callThrough();
    component.addAction();
    expect(component.addAction).toHaveBeenCalled();
    expect(component.editStatus).toBe(false);
    component.addAction();
    expect(component.addAction).toHaveBeenCalled();
    expect(component.addStatus).toBe(false);

  });
  it('it should action status', () => {
    component.addStatus = false
    spyOn(component, 'addActionStatus').and.callThrough();
    component.addActionStatus();
    expect(component.addActionStatus).toHaveBeenCalled();
    expect(component.addStatus).toBe(true);

  });

  it('it should edit action', () => {
    const FAKE_ACTION = {
      id: 213,
      name: 'action.name',
      date: 'action.date',
      title: 'action.title',
      description: 'action.description',
      imagePath: 'action.imagePath'
    }
    spyOn(component, 'editAction').and.callThrough();
    component.editAction(FAKE_ACTION);
    expect(component.editAction).toHaveBeenCalled();
    expect(component.currentActionId).toBe(213);

  });
});
