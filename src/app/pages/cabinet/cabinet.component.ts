import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account/account.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
public user!: any;
public userName!: any
  constructor(
    private accountService: AccountService
  ) { }


  ngOnInit(): void {
    this.userPage()
  }

  userPage(): void {
   this.user = JSON.parse(localStorage.currentUser)
 this.userName = this.user.fullName.split(' ')
  }
}
