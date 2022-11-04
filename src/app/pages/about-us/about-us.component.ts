import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public q1 = false;
  public q2 = false;
  public q3 = false;
  public q4 = false;

  constructor() { }
  question1(): void {
    this.q1 = !this.q1
    this.q2 = false;
    this.q3 = false;
    this.q4 = false;
  }
  question2(): void {
    this.q2 = !this.q2
    this.q1 = false;
    this.q3 = false;
    this.q4 = false;
  }
  question3(): void {
    this.q3 = !this.q3
    this.q2 = false;
    this.q1 = false;
    this.q4 = false;
  }
  question4(): void {
    this.q4 = !this.q4
    this.q2 = false;
    this.q3 = false;
    this.q1 = false;
  }
  ngOnInit(): void {
  }

}
