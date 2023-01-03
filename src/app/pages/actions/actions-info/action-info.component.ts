import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IActionResponse } from 'src/app/shared/interfaces/action/action.interface';
import { ActionService } from 'src/app/shared/services/action/action.service';

@Component({
  selector: 'app-action-info',
  templateUrl: './action-info.component.html',
  styleUrls: ['./action-info.component.scss']
})
export class ActionInfoComponent implements OnInit {
  public currentAction!: IActionResponse;
  public text!: any;

  constructor(
    private actionService: ActionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.loadAction()

  }

  loadAction(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.actionService.getOne(id).subscribe(data => {
      this.currentAction = data;
      this.text =this.currentAction.description.split('.')
    })
  }

}
