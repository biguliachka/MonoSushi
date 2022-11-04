import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IActionResponse } from 'src/app/shared/interfaces/action/action.interface'
import { ActionService } from 'src/app/shared/services/action/action.service';
import { deleteObject, getDownloadURL, percentage, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';


@Component({
  selector: 'app-admin-action',
  templateUrl: './admin-action.component.html',
  styleUrls: ['./admin-action.component.scss']
})

export class AdminActionComponent implements OnInit {
  public adminActions: Array<IActionResponse> = [];
  public actionForm!: FormGroup;
  public editStatus = false;
  public uploadPercent!: number;
  public isUploaded = false;
  private currentActionId = 0;
  public addStatus = false;

  constructor(
    private fb: FormBuilder,
    private actionService: ActionService,
    private storage: Storage
  ) { }

  ngOnInit(): void {
    this.initActionForm();
    this.loadActions();
  }
  addActionStatus(): void {
    this.addStatus = !this.addStatus;
  }
  initActionForm(): void {
    let dd = new Date();
    let m: string = `${dd.getMonth() + 1}`
    let y: string = `${dd.getFullYear()}`
    if (m.length < 2) m = '0' + m;
    if (y.length < 2) y = '0' + y;
    this.actionForm = this.fb.group({
      name: [null, Validators.required],
      date: [`${m}.${y}`, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      imagePath: [null, Validators.required]
    });
  }

  loadActions(): void {
    this.actionService.getAll().subscribe(data => {
      this.adminActions = data;
    })
  }

  addAction(): void {
    if (this.editStatus) {
      this.actionService.update(this.actionForm.value, this.currentActionId).subscribe(() => {
        this.loadActions();
      })
    } else {
      this.actionService.create(this.actionForm.value).subscribe(() => {
        this.loadActions();
      })
    }
    this.editStatus = false;
    this.actionForm.reset();
    this.isUploaded = false;
    this.uploadPercent = 0;
  }

  editAction(action: IActionResponse): void {
    this.actionForm.patchValue({
      name: action.name,
      date: action.date,
      title: action.title,
      description: action.description,
      imagePath: action.imagePath
    });
    this.editStatus = true;
    this.currentActionId = action.id;
    this.isUploaded = true;
  }

  deleteAction(action: IActionResponse): void {
    this.actionService.delete(action.id).subscribe(() => {
      this.loadActions();
    })
  }
  upload(event: any): void {
    const file = event.target.files[0];
    this.uploadFile('images', file.name, file)
      .then(data => {
        this.actionForm.patchValue({
          imagePath: data
        });
        this.isUploaded = true;
      })
      .catch(err => {
        console.log(err);
      })
  }
  async uploadFile(folder: string, name: string, file: File | null): Promise<string> {
    const path = `${folder}/${name}`;
    let url = '';
    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        percentage(task).subscribe(data => {
          this.uploadPercent = data.progress
        });
        await task;
        url = await getDownloadURL(storageRef);
      } catch (e: any) {
        console.error(e);
      }
    } else {
      console.log('wrong format');
    }
    return Promise.resolve(url);
  }
  deleteImage(): void {
    const task = ref(this.storage, this.valueByControl('imagePath'));
    deleteObject(task).then(() => {
      console.log('File deleted');
      this.isUploaded = false;
      this.uploadPercent = 0;
      this.actionForm.patchValue({
        imagePath: null
      })
    })
  }

  valueByControl(control: string): string {
    return this.actionForm.get(control)?.value;
  }

}
