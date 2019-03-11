import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'indev-fab',
  template: `
    <div #fab class="fab">
      <button mat-fab>
        <mat-icon aria-label="Scroll to top btn" (click)="scrollTop()">arrow_upward</mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
      .fab {
        display: none;

        position: fixed;
        z-index: 200;
        bottom: 35px;
        right: 30px;
      }
      @media screen and (min-width: 600px) {
        .fab {
          bottom: 40px;
          right: 50px;
        }
      }

      @media screen and(min-width: 840px) {
        .fab {
          display: none !important;
        }
      }

      .visible {
        display: initial;
      }
    `
  ]
})
export class FabComponent implements AfterViewInit {
  @ViewChild('fab') fabRef: ElementRef;
  ngAfterViewInit() {
    // show fab after user scrolled
    document.addEventListener('scroll', () => {
      const fab = this.fabRef.nativeElement as HTMLElement;
      if (document.documentElement.scrollTop > 0) {
        // user scrolled
        fab.classList.add('visible');
      } else {
        // user is at top of the web page
        fab.classList.remove('visible');
      }
    });
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
