import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../shared/services/account/account.service";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  public user!: any;
  constructor(

  ) { }


  ngOnInit(): void {
    this.userPage()
  }

  userPage(): void {
    this.user = JSON.parse(localStorage.currentUser)

  }
}
