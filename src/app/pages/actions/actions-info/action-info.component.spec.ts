import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInfoComponent } from './action-info.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('ActionInfoComponent', () => {
  let component: ActionInfoComponent;
  let fixture: ComponentFixture<ActionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInfoComponent ],
      imports:
        [HttpClientTestingModule,
        RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
