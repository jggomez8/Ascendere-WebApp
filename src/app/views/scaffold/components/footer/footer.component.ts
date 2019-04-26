import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'indev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  // TODO: remove elements if admin modules
  constructor(private _snackBar: MatSnackBar, private _route: Router) {}

  spotEasterEgg($event: Event) {
    $event.preventDefault();
    this._snackBar.open('Felicidades. Me atrapaste');
  }

  get isNotAtAdmin(): boolean {
    return !this._route.url.includes('admin');
  }
}
