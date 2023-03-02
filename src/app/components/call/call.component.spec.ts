import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallComponent } from './call.component';
import {Auth} from "@angular/fire/auth";
import {Firestore} from "@angular/fire/firestore";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('CallComponent', () => {
  let component: CallComponent;
  let fixture: ComponentFixture<CallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Auth, useValue: {} },
        { provide: Firestore, useValue: {} }
      ] })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
