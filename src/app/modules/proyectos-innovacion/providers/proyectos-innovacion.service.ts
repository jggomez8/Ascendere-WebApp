import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class ProyectosInnovacionService {
  constructor(private _afs: AngularFirestore, private _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe(user => {
      this._user = user;
    });

    this.proyectosCollection = this._afs.collection(
      'innovacion-docente/proyectos-innovacion/proyectos',
      ref => ref.orderBy('name')
    );
  }

  private _user: firebase.User;
  public proyectosCollection: AngularFirestoreCollection;

  public createProyecto(proyecto): Promise<firebase.firestore.DocumentReference> {
    if (!this._user) throw Error('User not authenticated');

    let date = new Date();
    return this.proyectosCollection.add({
      ...proyecto,
      created: date,
      edited: date,
      creator: this._user.uid
    });
  }

  public updateProyecto(id: string, proyecto): Promise<void> {
    if (!this._user) throw Error('User not authenticated');

    return this.proyectosCollection.doc(id).update({
      ...proyecto,
      edited: new Date(),
      editor: this._user.uid
    });
  }
}
