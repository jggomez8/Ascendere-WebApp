import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event, Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private _isOpened: boolean = false;
  drawerState: BehaviorSubject<boolean>;

  constructor(private _router: Router) {
    this.drawerState = new BehaviorSubject(this._isOpened);

    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart && this._isOpened) {
        this.changeState();
      }
    });
  }

  get state() {
    return this.drawerState;
  }

  changeState() {
    this._isOpened = !this._isOpened;
    this.drawerState.next(this._isOpened);
  }
}
