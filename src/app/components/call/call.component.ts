import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Auth} from "@angular/fire/auth";
import { Firestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {AccountService} from "../../shared/services/account/account.service";

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {

  public authForm!: FormGroup;

  constructor(
    private auth: Auth,
    private afs: Firestore,
    private router: Router,
    private accountService: AccountService,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.initAuthForm();
  }

  initAuthForm(): void {
    this.authForm = this.fb.group({
      name: [null, [Validators.required]],
      number: [null, [Validators.required]]
    })
  }






}
