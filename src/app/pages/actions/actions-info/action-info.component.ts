import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from 'src/app/shared/services/action/action.service';

@Component({
  selector: 'app-action-info',
  templateUrl: './action-info.component.html',
  styleUrls: ['./action-info.component.scss']
})
export class ActionInfoComponent implements OnInit {
  public currentActionName! : string;
  public currentActionTitle! : string
  public text!: any;

  constructor(
    private actionService: ActionService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.loadAction()

  }

   loadAction(): void {
     const id = this.activatedRoute.snapshot.paramMap.get('id');
     this.actionService.getOneFirebase(id as string).subscribe(data => {
       this.currentActionName = data.name;
       this.currentActionTitle = data.title;
       this.text = data.description.split('.')
     })
   }
}
