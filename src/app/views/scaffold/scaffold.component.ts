import { Component, OnInit } from '@angular/core';
import { DrawerService } from './providers/drawer.service';

@Component({
  selector: 'indev-shell-view',
  template: `
    <div class="scaffold">
      <indev-app-bar></indev-app-bar>

      <main [ngStyle]="{ overflow: (drawerState.state | async) ? 'hidden' : 'scroll' }">
        <router-outlet></router-outlet>
        <indev-go-top-fab></indev-go-top-fab>
        <!-- TODO: add fab -->
        <indev-footer></indev-footer>
      </main>
      <indev-drawer *ngIf="(drawerState.state | async)"></indev-drawer>
    </div>
  `,
  styles: [
    `
      .scaffold {
        position: absolute;
        top: 56px;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
      }
      indev-drawer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      indev-app-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }

      main {
        width: 100%;
        box-sizing: border-box;
        position: relative;
        -webkit-overflow-scrolling: touch;
        overflow: auto;

        display: block;

        flex: 1;
      }
    `
  ]
})
export class ScaffoldComponent implements OnInit {
  constructor(public drawerState: DrawerService) {}

  ngOnInit() {}
}
