import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DrawerService } from './providers/drawer.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { MatButton } from '@angular/material';
@Component({
  selector: 'indev-shell-view',
  template: `
    <div class="scaffold">
      <indev-app-bar></indev-app-bar>

      <indev-drawer *ngIf="(drawerState.state | async)"></indev-drawer>
      <main
        #main
        [ngStyle]="{ overflow: (drawerState.state | async) ? 'hidden' : 'hidden scroll' }"
      >
        <router-outlet></router-outlet>
        <div class="fab" #fab>
          <button mat-fab>
            <mat-icon aria-label="Scroll to top btn" (click)="scrollTop()">arrow_upward</mat-icon>
          </button>
        </div>
        <indev-footer></indev-footer>
      </main>
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
        display: block;
        flex: 1;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        -webkit-overflow-scrolling: touch;
        overflow: hidden scroll;
        overflow: hidden scroll;
        overflow: hidden scroll;
      }

      .fab {
        display: none;
        position: fixed;
        z-index: 200;
        bottom: 25px;
        right: 15px;
      }
      @media screen and (min-width: 1024px) {
        .fab {
          bottom: 40px;
          right: 40px;
        }
      }
    `
  ]
})
export class ScaffoldComponent implements OnInit, AfterViewInit {
  constructor(public drawerState: DrawerService, private _router: Router) {}

  @ViewChild('main') mainRef: ElementRef;
  @ViewChild('fab') fabRef: ElementRef;

  /**
   * Subscribe to router events, so that when user navigates to another page,
   * the content inside of it is scrolled to the top of the main container.
   */
  ngOnInit() {
    // TODO: remove fab button
    // TODO: add unsubscribe
    // TODO: add app loader

    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // TODO: Ask if scroll has to be set to smooth ot auto
        (this.mainRef.nativeElement as HTMLElement).scrollTo({ top: 0, behavior: 'auto' });
      }
    });
  }

  ngAfterViewInit() {
    let mainEl = this.mainRef.nativeElement as HTMLElement;
    let fabEl = this.fabRef.nativeElement as HTMLElement;

    mainEl.addEventListener('scroll', () => {
      fabEl.style.display = mainEl.scrollTop > 250 ? 'initial' : 'none';
    });
  }

  scrollTop() {
    (this.mainRef.nativeElement as HTMLElement).scrollTo({ top: 0, behavior: 'smooth' });
  }
}
