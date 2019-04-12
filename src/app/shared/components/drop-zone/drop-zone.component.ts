import { Component, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DropZone {
  path: string;
  type: string;
}

@Component({
  selector: 'id-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  snapshot: Observable<any>;
  isHovering: boolean;

  constructor(
    private _fireStorage: AngularFireStorage,
    public dialogRef: MatDialogRef<DropZoneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DropZone
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  startUpload(event: FileList) {
    const file = event.item(0);
    // Client-side validation example
    if (this.data.type !== undefined)
      if (file.type.split('/')[0] !== 'image') {
        alert('Archivo no soportado');
        return;
      }

    // upload file
    const filePath = `${this.data.path}/${file.name}_${new Date().getTime()}`;
    const fileRef = this._fireStorage.ref(filePath);
    const task = this._fireStorage.upload(filePath, file);

    // set Observables
    this.uploadPercent = task.percentageChanges();
    this.snapshot = task.snapshotChanges();

    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = fileRef.getDownloadURL())))
      .subscribe();
  }

  pickFile(el) {
    el.click();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }
}
