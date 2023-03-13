import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IActionRequest, IActionResponse } from '../../interfaces/action/action.interface';
import {
  Firestore,
  CollectionReference,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc, docData
} from "@angular/fire/firestore";
import { DocumentData, collection } from "@firebase/firestore"

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private url = environment.BACKEND_URL;
  private api = { actions: `${this.url}/actions` };
  private actionCollection!: CollectionReference<DocumentData>;
  constructor(
    private http: HttpClient,
    private afs: Firestore,
  ) {
    this.actionCollection = collection(this.afs, 'actions');
  }


  getAllFirebase() {
    return collectionData(this.actionCollection, { idField: 'id' });
  }

  getOneFirebase(id: string) {
    const actionDocumentReference = doc(this.afs, `actions/${id}`);
    return docData(actionDocumentReference, { idField: 'id' });
  }

  createFirebase(category: IActionRequest) {
    return addDoc(this.actionCollection, category);
  }

  updateFirebase(category: IActionRequest, id: string) {
    const actionDocumentReference = doc(this.afs, `categories/${id}`);
    return updateDoc(actionDocumentReference, {...category});
  }

  deleteFirebase(id: string) {
    const actionDocumentReference = doc(this.afs, `categories/${id}`);
    return deleteDoc(actionDocumentReference);
  }

}
