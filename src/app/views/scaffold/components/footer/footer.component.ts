import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'indev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private _snackBar: MatSnackBar) {}

  spotEasterEgg($event: Event) {
    $event.preventDefault();
    this._snackBar.open('Felicidades. Me atrapaste', null, {
      verticalPosition: 'bottom',
      horizontalPosition: 'start'
    });
  }
}
