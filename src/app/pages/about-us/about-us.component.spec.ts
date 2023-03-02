import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should question1', () => {
    component.q1 = true
    spyOn(component, 'question1').and.callThrough();
    component.question1();
    expect(component.question1).toHaveBeenCalled();
    expect(component.q1).toBe(false);

  });
  it('it should question2', () => {
    component.q2 = false
    spyOn(component, 'question2').and.callThrough();
    component.question2();
    expect(component.question2).toHaveBeenCalled();
    expect(component.q2).toBe(true);

  });
  it('it should question3', () => {
    component.q3 = false
    spyOn(component, 'question3').and.callThrough();
    component.question3();
    expect(component.question3).toHaveBeenCalled();
    expect(component.q2).toBe(false);

  });
  it('it should question4', () => {
    spyOn(component, 'question4').and.callThrough();
    component.question4();
    expect(component.question4).toHaveBeenCalled();
    expect(component.q1).toBe(false);

  });



});
